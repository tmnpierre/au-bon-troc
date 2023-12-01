import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;

  @IsString()
  readonly description: string;
}
