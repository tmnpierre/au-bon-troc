import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsInt()
  readonly price?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
