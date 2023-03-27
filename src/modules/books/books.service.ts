import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks(): string[] {
    return ['a', 'b'];
  }

  getBook(): string {
    return 'c';
  }

  deleteBook(id: string): boolean {
    console.log(id);
    return true;
  }
}
