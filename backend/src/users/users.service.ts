import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UsersEntity} from './users.entity';
import {CreateUserDto} from './dtos/create.user.dto';
import {UpdateUserDto} from './dtos/update.user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async findOneOrFail(id: string): Promise<UsersEntity> {
    try {
      return await this.usersRepository.findOneOrFail({where: {id}});
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByEmail(email: string): Promise<UsersEntity> {
    try {
      return await this.usersRepository.findOneOrFail({where: {email: email}});
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(userDto: CreateUserDto): Promise<UsersEntity> {
    const user = this.usersRepository.create(userDto);
    return await this.usersRepository.save(user);
  }

  async update(id: string, userDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneOrFail({where: {id}});
    this.usersRepository.merge(user, userDto);
    return await this.usersRepository.save(user);
  }

  async delete(id: string) {
    await this.usersRepository.findOneOrFail({where: {id}});
    return this.usersRepository.delete({id});
  }
}
