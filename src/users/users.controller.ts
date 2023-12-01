import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created.', type: CreateUserDto })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return { message: 'User successfully created', data: user };
  }
  
  
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'Users fetched successfully.' })
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return { message: 'Users fetched successfully', data: users };
  }
  
  @ApiOperation({ summary: 'Retrieve a user by UUID' })
  @ApiParam({ name: 'UUID', type: 'string', required: true, description: 'User UUID' })
  @ApiResponse({ status: 200, description: 'User fetched successfully.' })
  @Get(':UUID')
  async findOne(@Param('UUID') UUID: string) {
    const user = await this.usersService.findOne(UUID);
    return { message: 'User fetched successfully', data: user };
  }
  
  
  @ApiOperation({ summary: 'Update a user by UUID' })
  @ApiParam({ name: 'UUID', type: 'string', required: true, description: 'User UUID' })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @Patch(':UUID')
  async update(@Param('UUID') UUID: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(UUID, updateUserDto);
    return { message: 'User updated successfully', data: user };
  }
  
  
  @ApiOperation({ summary: 'Delete a user by UUID' })
  @ApiParam({ name: 'UUID', type: 'string', required: true, description: 'User UUID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully.' })
  @Delete(':UUID')
  async remove(@Param('UUID') UUID: string) {
    await this.usersService.remove(UUID);
    return { message: 'User deleted successfully' };
  }
  
}
