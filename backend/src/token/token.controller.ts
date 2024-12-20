import {Body, Controller, Put} from '@nestjs/common';
import {RefreshTokenDto} from './refresh.token.dto';
import {TokenService} from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Put('refresh')
  async refreshToken(@Body() data: RefreshTokenDto) {
    return await this.tokenService.refreshToken(data.oldToken);
  }
}
