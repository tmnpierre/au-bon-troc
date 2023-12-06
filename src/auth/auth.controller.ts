import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(loginUserDto.pseudo, loginUserDto.password);
    if (user) {
      const payload = { username: user.pseudo, sub: user.UUID };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null; 
  }
}
