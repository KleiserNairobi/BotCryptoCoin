import {Controller, Get, Param} from '@nestjs/common';
import {BinanceService} from './binance.service';

@Controller('binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('account')
  async getAccountInfo() {
    return await this.binanceService.getAccountInfo();
  }

  @Get('ticker/:symbol')
  async getTickerPrice(@Param('symbol') symbol: string) {
    return await this.binanceService.getTickerPrice(symbol);
  }
}
