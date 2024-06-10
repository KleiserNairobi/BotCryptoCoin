import {Injectable, Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import * as Binance from 'node-binance-api';

@Injectable()
export class BinanceService {
  private binanceClient: any;
  private logger = new Logger(BinanceService.name);

  constructor(private configService: ConfigService) {
    this.binanceClient = new (Binance as any)().options({
      APIKEY: this.configService.get('BINANCE_API_KEY'),
      APISECRET: this.configService.get('BINANCE_API_SECRET'),
      useServerTime: true,
      test: true, // Configura para usar a testnet
      family: 4, // Define explicitamente o uso de IPv4
    });
  }

  async getExchangeInfo() {
    try {
      return await new Promise((resolve, reject) => {
        this.binanceClient.exchangeInfo((error: any, response: unknown) => {
          if (error) {
            return reject(error);
          }
          resolve(response);
        });
      });
    } catch (error) {
      this.logger.error(error.message || error.toString());
      throw error;
    }
  }

  async getTickerPrice(symbol: string) {
    return new Promise((resolve, reject) => {
      this.binanceClient.prices(symbol, (error: any, ticker: unknown) => {
        if (error) {
          return reject(error);
        }
        resolve(ticker);
      });
    });
  }
}
