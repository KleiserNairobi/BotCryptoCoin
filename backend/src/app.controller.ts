import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {PrismaService} from './prisma/prisma.service';

@Controller('/api')
export class AppController {
  constructor(
    private appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/configs')
  async getConfig(): Promise<any> {
    return await this.prisma.config.findMany();
  }
}
