import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {compareSync as bcryptCompareSync} from 'bcrypt';
import {UsersService} from 'src/users/users.service';
import {AuthResponseDto} from './auth.dto';
import {ConfigService} from '@nestjs/config';
import {TokenService} from 'src/token/token.service';

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => TokenService))
    private readonly tokenService: TokenService,
  ) {
    this.jwtExpirationTimeInSeconds = Number(
      this.configService.get<string>('JWT_EXPIRATION_TIME'),
    );
  }

  async login(email: string, password: string): Promise<AuthResponseDto> {
    const user = await this.usersService.findByEmail(email);
    if (!user || !bcryptCompareSync(password, user.senha)) {
      throw new UnauthorizedException();
    }
    const payload = {sub: user.id, username: user.email};
    const token = this.jwtService.sign(payload);
    await this.tokenService.saveToken(token, user.email);
    return {token, expiresIn: this.jwtExpirationTimeInSeconds};
  }
}
