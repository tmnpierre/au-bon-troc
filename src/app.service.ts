import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  logicToSayGoodbye(): string {
    return 'Goodbye';
  }
}
