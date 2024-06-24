import {Injectable} from '@nestjs/common';
import {Spot, RestMarketTypes} from '@binance/connector-typescript';

@Injectable()
export class BinanceService {
  private client: Spot;

  constructor() {
    this.client = new Spot(
      'Z2LRB9wQhP9EyY1iAbGC8bbY4ZaSmdfyzgwQq6Ccyftqtg99TnkCtbAMMODENQGQ',
      'bKtTLgMlf57tSOQFAe3tKivF4OS3LUHo3CHVX40rlIEERjMl44InJ6MR7kT9aATH',
      {
        baseURL: 'https://testnet.binance.vision/',
      },
    );
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
}
