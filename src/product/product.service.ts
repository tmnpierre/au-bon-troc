import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto) {
    return 'Product created';
  }

  async findAll() {
    return 'All products';
  }

  async findOne(UUID: string) {
    return `Product with UUID ${UUID}`;
  }

  async update(UUID: string, updateProductDto: UpdateProductDto) {
    return `Product with UUID ${UUID} updated`;
  }

  async remove(UUID: string) {
    return `Product with UUID ${UUID} deleted`;
  }
}
