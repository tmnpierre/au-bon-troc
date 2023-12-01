import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(UUID: string) {
    return this.prisma.users.findUnique({ where: { UUID } });
  }
  

  async update(UUID: string, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({ where: { UUID }, data: updateUserDto });
  }  

  async remove(UUID: string) {
    return this.prisma.users.delete({ where: { UUID } });
  }
}
