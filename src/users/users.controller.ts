import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import {UsersService} from './users.service';
import { UserDto } from './entities/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Get()
    public getUsers(){
      return this.usersService.getAll();
    }

    @Get(':id')
    public getUserById(@Param('id', ParseIntPipe) id: number){
        return this.usersService.getById(id);
    }

    @Post()
    public addUser(@Body() dto: UserDto){
      return this.usersService.createUser(dto);
    }

    @Delete(":id")
    public deleteUser(@Param("id", ParseIntPipe) id:number){
      return this.usersService.delete(id);
    }

    @Put(":id")
    public async updateUser(@Param("id", ParseIntPipe) id:number, @Body() dto:UserDto){
      return this.usersService.update(id,dto);
    }
}
