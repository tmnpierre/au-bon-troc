import { IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  readonly pseudo: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}
