import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './entities/user.dto';
import { CreateUserDto } from './entities/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public getAll() {
    return this.usersRepository.find();
}

async createUser(dto: CreateUserDto){
  return await this.usersRepository.save({...dto});
}

  public getById(id: number) {
    return this.usersRepository.findOne({ where: {id: id }});
};
  public async delete(userId: number) {
    return await this.usersRepository.delete(userId);
  }

  public async findUserByUsername(username: string) {
    return await this.usersRepository.findOne({ where: {username} });
  }
 

  public async findUserByEmail(email: string) {
    return await this.usersRepository.findOne({ where: {email} });
  }

  public async update(id: number, dto:UserDto){
    return await this.usersRepository.update(id, dto);
}
}
