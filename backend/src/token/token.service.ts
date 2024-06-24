import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TokenEntity} from './token.entity';
import {UsersService} from 'src/users/users.service';
import {AuthService} from 'src/auth/auth.service';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(TokenEntity)
    private readonly tokenRepository: Repository<TokenEntity>,
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async saveToken(token: string, email: string): Promise<void> {
    const objToken = await this.tokenRepository.findOne({where: {email}});
    if (objToken) {
      await this.tokenRepository.update(objToken.id, {hash: token});
    } else {
      await this.tokenRepository.insert({hash: token, email: email});
    }
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({
      where: {hash: oldToken},
    });
    if (objToken) {
      const user = await this.usersService.findByEmail(objToken.email);
      return this.authService.login(user.email, user.senha);
    } else {
      return new HttpException(
        {errorMessage: 'Token inválido.'},
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
