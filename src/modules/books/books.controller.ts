import { Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Param, Body } from '@nestjs/common';
import { GetBookArgsDto, DeleteBookArgsDto } from './dtos';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  findAll(): string[] {
    return this.bookService.getBooks();
  }

  @Get(':id')
  findById(@Param() { id }: GetBookArgsDto) {
    console.log(id);
    return this.bookService.getBook();
  }

  @Post()
  delete(@Body() { id }: DeleteBookArgsDto) {
    return this.bookService.deleteBook(id);
  }
}
