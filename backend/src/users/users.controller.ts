import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import {Response} from 'express';
import {UsersService} from './users.service';
import {CreateUserDto} from './dtos/create.user.dto';
import {UpdateUserDto} from './dtos/update.user.dto';
import {AuthGuard} from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAllUsers() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findUserById(@Param('id') id: string, @Res() response: Response) {
    try {
      const user = await this.usersService.findOneOrFail(id);
      response.status(HttpStatus.OK).json(user);
    } catch (error) {
      response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Not Found',
        message: `Usuário com ID ${id} não encontrado`,
      });
    }
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return await this.usersService.create(userDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateUser(@Param('id') id: string, @Body() userDto: UpdateUserDto) {
    return await this.usersService.update(id, userDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id') id: string) {
    await this.usersService.delete(id);
  }
}
