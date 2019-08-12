import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service'
import { IUser } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
@Get()
  getAll(): Promise<IUser[]> {
    return this.usersService.getAll();
  }

@Post()
  create(@Body() createItem: CreateUserDto): Promise<IUser> {
    return this.usersService.create(createItem);
  }

@Put()
  createOnPut(@Body() createItem: CreateUserDto): Promise<IUser> {
    return this.usersService.createOnPut(createItem);
  }

@Delete()
  Ondelete(){
      return this.usersService.Ondelete();
  }

}
