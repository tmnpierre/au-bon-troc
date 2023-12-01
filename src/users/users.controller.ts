import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return { message: 'User successfully created', data: user };
  }
  
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return { message: 'Users fetched successfully', data: users };
  }
  
  @Get(':UUID')
  async findOne(@Param('UUID') UUID: string) {
    const user = await this.usersService.findOne(UUID);
    return { message: 'User fetched successfully', data: user };
  }
  
  @Patch(':UUID')
  async update(@Param('UUID') UUID: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(UUID, updateUserDto);
    return { message: 'User updated successfully', data: user };
  }
  
  @Delete(':UUID')
  async remove(@Param('UUID') UUID: string) {
    await this.usersService.remove(UUID);
    return { message: 'User deleted successfully' };
  }  
}
