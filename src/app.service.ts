import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private userService: UsersService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async getUser(userId: number): Promise<User> {
    const user = await this.userService.getById(userId);
    return user;
  }
}
