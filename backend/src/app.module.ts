import {Module} from '@nestjs/common';
import {PrismaService} from './prisma/prisma.service';
import {ConfigController} from './controllers/config.controller';

@Module({
  controllers: [ConfigController],
  providers: [PrismaService],
})
export class AppModule {}
