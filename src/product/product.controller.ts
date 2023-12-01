import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.productService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(UUID, updateProductDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.productService.remove(UUID);
  }
}
