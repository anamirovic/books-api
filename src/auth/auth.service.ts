import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/entities/user.dto';
import { CreateUserDto } from 'src/users/entities/create-user.dto';
import { UserRole } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByUsername(username);
    console.log('test1, ',user);
    console.log('test1, ',pass);
    if (user && user.password === pass) {
      //const { password, ...result } = user;
      console.log('test1, ',user);
      console.log('test1, ',pass);
      return user;
    }
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: UserRole};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // async validateUsernameAndEmail(userDto: CreateUserDto): Promise<any> {
  //   if (await this.usersService.findUserByEmail(userDto.email)){
  //     throw new BadRequestException('Email in use');
  //   } 
  //   if (await this.usersService.findUserByUsername(userDto.username)){
  //     throw new BadRequestException('Username taken');
  //   }
  // }

  // public async register(userDto: CreateUserDto) {
  //   this.validateUsernameAndEmail(userDto);
  //   const user = await this.usersService.createUser(userDto);
  //   return user;
  // }

}