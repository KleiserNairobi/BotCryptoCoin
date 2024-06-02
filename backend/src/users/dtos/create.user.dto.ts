import {IsEmail, IsNotEmpty, Matches} from 'class-validator';
import {RegexHelper} from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty({message: 'Informe o nome.'})
  nome: string;

  @IsEmail()
  @IsNotEmpty({message: 'Informe o email.'})
  email: string;

  @IsNotEmpty({message: 'Informe a senha.'})
  @Matches(RegexHelper.password, {
    message:
      'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.',
  })
  senha: string;
}
