import {Controller, Get, Query} from '@nestjs/common';
import {BinanceService} from './binance.service';

@Controller('binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('accountInfo')
  async getAccountInfo() {
    return await this.binanceService.getAccountInfo();
  }

  @Get('exchangeInfo')
  async getExchangeInformation(@Query('symbol') symbol: string) {
    return await this.binanceService.getExchangeInformation(symbol);
  }

  @Get('symbolPrice')
  async getSymbolPrice() {
    return await this.binanceService.getSymbolPrice();
  }

  @Get('accountStatus')
  async getAccountStatus() {
    return await this.binanceService.getAccountStatus();
  }
}
