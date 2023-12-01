import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getArticles(): string[] {
    return ['Article 1', 'Article 2', 'Article 3'];
  }
}
