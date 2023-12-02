import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'votre_secret_jwt',
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.users.findUnique({ where: { UUID: payload.sub } });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
