import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(JwtAuthGuard)
@Get('protected')
async protectedRoute() {
export class JwtAuthGuard extends AuthGuard('jwt') {}}
function protectedRoute() {
    throw new Error('Function not implemented.');
}

