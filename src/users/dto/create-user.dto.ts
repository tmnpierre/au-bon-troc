import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user123', description: 'The pseudo of the user' })
  @IsString()
  readonly Pseudo: string;

  @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
  @IsEmail()
  readonly Mail: string;

  @ApiProperty({ example: 'yourPassword123', description: 'The password of the user' })
  @IsString()
  @MinLength(6)
  readonly password: string;
}
