import {Module, forwardRef} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TokenController} from './token.controller';
import {TokenService} from './token.service';
import {TokenEntity} from './token.entity';
import {UsersModule} from 'src/users/users.module';
import {AuthModule} from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenEntity]),
    UsersModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
