import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book} from 'src/books/entities/book.entity';
import { Repository } from 'typeorm';
import { BookDto } from './entities/book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>
    ){}

    public getAll() {
        return this.bookRepository.find();
    }

    public getById(id: number) {
        return this.bookRepository.findOne({ where: {id: id }});
    };

    // public getById(id: number){
    //     return this.bookRepository.findOne(id);
    // }

    public async create(bookDto:BookDto){
        const book= this.bookRepository.create(bookDto);
        return await this.bookRepository.save(book);
    }

    public async delete(id: number){
        return await this.bookRepository.delete(id);
    }

    public async update(id: number, dto:BookDto){
        return await this.bookRepository.update(id, dto);
    }

   
}
