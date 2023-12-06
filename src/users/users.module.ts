import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProductModule } from '../product/product.module';
import { PrismaModule } from '../prisma.module'

@Module({
  imports: [ProductModule, PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService] 
})
export class UsersModule {}