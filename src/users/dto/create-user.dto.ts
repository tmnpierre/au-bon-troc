import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly Pseudo: string;

  @IsEmail()
  readonly Mail: string;
}
