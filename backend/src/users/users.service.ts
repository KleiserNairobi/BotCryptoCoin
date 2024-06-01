import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UsersEntity} from './users.entity';
import {UsersDto} from './users.dto';

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

  async create(userDto: UsersDto): Promise<UsersEntity> {
    const user = this.usersRepository.create(userDto);
    return await this.usersRepository.save(user);
  }

  async update(id: string, userDto: UsersDto) {
    const user = await this.usersRepository.findOneOrFail({where: {id}});
    this.usersRepository.merge(user, userDto);
    return await this.usersRepository.save(user);
  }

  async delete(id: string) {
    await this.usersRepository.findOneOrFail({where: {id}});
    return this.usersRepository.delete({id});
  }
}
