import {Injectable} from '@nestjs/common';
import {Spot} from '@binance/connector-typescript';

@Injectable()
export class BinanceService {
  private client: Spot;

  constructor() {
    this.client = new Spot('apiKey', 'secretKey', {
      baseURL: 'https://testnet.binance.vision',
    });
  }

  async getAccountInfo(): Promise<any> {
    const response = await this.client.accountInformation();
    return response;
  }
}
