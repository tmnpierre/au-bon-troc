import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateUser(pseudo: any, password: any) {
        throw new Error('Method not implemented.');
    }
}
