import {Controller, Get, Post, Query} from '@nestjs/common';
import {BinanceService} from './binance.service';

@Controller('binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Post('start-user-data-stream')
  async startUserDataStream() {
    await this.binanceService.startUserDataStream();
    return {message: 'User data stream started'};
  }

  @Post('stop-user-data-stream')
  async stopUserDataStream() {
    await this.binanceService.stopUserDataStream();
    return {message: 'User data stream stopped'};
  }

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

  @Get('system-status')
  async getSystemStatus() {
    return await this.binanceService.getSystemStatus();
  }
}
