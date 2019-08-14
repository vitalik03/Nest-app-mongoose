import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service'
import { IUser } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    getUsers(): Promise<IUser[]> {
      return this.usersService.getUsers();
    }
  
    @Post()
    addUser(@Body() createUser: CreateUserDto): Promise<IUser> {
      return this.usersService.addUser(createUser);
    } 

    @Delete()
      deleteUser(@Body() createUser: CreateUserDto){
        return this.usersService.deleteUser(createUser.name);
      }

    @Put()
      updateUser(@Body() user: CreateUserDto): Promise<IUser>{
        return this.usersService.updateUser(user);
      }
}
