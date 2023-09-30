import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import {BooksService} from './books.service';
import { BookDto } from './entities/book.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}
    @Get()
    public getBooks(){
      return this.booksService.getAll();
    }

    @Get(':id')
    public getBook(@Param('id', ParseIntPipe) id: number){
        return this.booksService.getById(id);
    }

    @Post()
    public addBook(@Body() dto: BookDto){
      return this.booksService.create(dto);
    }

    @Delete(":id")
    public deleteBook(@Param("id", ParseIntPipe) id:number){
      return this.booksService.delete(id);
    }

    @Put(":id")
    public async updateBook(@Param("id", ParseIntPipe) id:number, @Body() dto:BookDto){
      return this.booksService.update(id,dto);
    }

  }

