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
} from '@nestjs/common';
import {Response} from 'express';
import {UsersService} from './users.service';
import {UsersDto} from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers() {
    return await this.usersService.findAll();
  }

  @Get(':id')
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
  async createUser(@Body() userDto: UsersDto) {
    return await this.usersService.create(userDto);
  }

  @Put(':id')
  async updateeUser(@Param('id') id: string, @Body() userDto: UsersDto) {
    return await this.usersService.update(id, userDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    await this.usersService.delete(id);
  }
}
