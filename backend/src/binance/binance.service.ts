import {Injectable, OnModuleInit, OnModuleDestroy} from '@nestjs/common';
import {
  Spot,
  WebsocketStream,
  RestMarketTypes,
} from '@binance/connector-typescript';

@Injectable()
export class BinanceService implements OnModuleInit, OnModuleDestroy {
  private client: Spot;
  private wsClient: WebsocketStream | null = null;
  private listenKey: string | null = null;

  constructor() {
    this.client = new Spot(
      'Z2LRB9wQhP9EyY1iAbGC8bbY4ZaSmdfyzgwQq6Ccyftqtg99TnkCtbAMMODENQGQ',
      'bKtTLgMlf57tSOQFAe3tKivF4OS3LUHo3CHVX40rlIEERjMl44InJ6MR7kT9aATH',
      {
        baseURL: 'https://testnet.binance.vision/',
      },
    );
  }

  async onModuleInit() {
    await this.startUserDataStream();
  }

  async onModuleDestroy() {
    await this.stopUserDataStream();
  }

  async startUserDataStream() {
    try {
      const response = await this.client.createListenKey();
      this.listenKey = response.listenKey;

      this.wsClient = new WebsocketStream({
        callbacks: {
          open: () => console.log('Connected to WebSocket server'),
          close: () => console.log('Disconnected from WebSocket server'),
          message: (data: string) => console.log(data),
        },
      });

      this.wsClient.userData(this.listenKey);
    } catch (error) {
      console.error('Error starting user data stream:', error);
      throw error;
    }
  }

  async stopUserDataStream() {
    try {
      if (this.listenKey) {
        await this.client.closeListenKey(this.listenKey);
        if (this.wsClient) {
          this.wsClient.disconnect();
        }
        this.listenKey = null;
      }
    } catch (error) {
      console.error('Error stopping user data stream:', error);
      throw error;
    }
  }

  async getAccountInfo(): Promise<any> {
    return await this.client.accountInformation();
  }

  async getExchangeInformation(symbol: string): Promise<any> {
    try {
      const options: RestMarketTypes.exchangeInformationOptions = {symbol};
      const response = await this.client.exchangeInformation(options);
      return response;
    } catch (error) {
      console.error('Error fetching exchange information:', error.message);
    }
  }

  async getSymbolPrice(): Promise<any> {
    return await this.client.symbolPriceTicker();
  }

  async getAccountStatus(): Promise<any> {
    try {
      return await this.client.accountStatus();
    } catch (error) {
      console.log(error);
    }
  }

  async getSystemStatus(): Promise<any> {
    try {
      const response = await this.client.systemStatus();
      return response;
    } catch (error) {
      console.error('Error fetching system status:', error);
      throw error;
    }
  }
}
