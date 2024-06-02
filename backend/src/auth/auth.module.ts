import {Module, forwardRef} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {UsersModule} from 'src/users/users.module';
import {TokenModule} from 'src/token/token.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: Number(configService.get<string>('JWT_EXPIRATION_TIME')),
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    forwardRef(() => TokenModule),
  ],
  exports: [AuthService],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
