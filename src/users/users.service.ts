import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = {
      ...createUserDto,
      password: hashedPassword
    };
    return this.prisma.users.create({ data: user });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(UUID: string) {
    return this.prisma.users.findUnique({ where: { UUID } });
  }

  async findByUsername(pseudo: string) {
    return this.prisma.users.findUnique({ where: { pseudo } });
  }

  async update(UUID: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto = { ...updateUserDto, password: hashedPassword };
    }
    return this.prisma.users.update({ where: { UUID }, data: updateUserDto });
  }

  async remove(UUID: string) {
    return this.prisma.users.delete({ where: { UUID } });
  }
}
