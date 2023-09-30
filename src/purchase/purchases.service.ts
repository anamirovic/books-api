import { Inject, Injectable, Logger, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './entities/purchase.entity';
import { PurchaseDto } from './entities/purchase.dto';
import { User } from 'src/users/entities/user.entity';
import { Book } from 'src/books/entities/book.entity';
import { BooksService } from 'src/books/books.service';
import { BookDto } from 'src/books/entities/book.dto';
@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchasesRepository: Repository<Purchase>,
    @Inject(forwardRef(() => BooksService))
    private readonly booksService: BooksService,
  ) {}

  async createPurchase(purchaseDto: PurchaseDto): Promise<Purchase> {
    const purchase = this.purchasesRepository.create(purchaseDto);
    purchase.user = { id: purchaseDto.userId } as User;
    const bookIds = purchase.bookIds.split(',').map((strId) => parseInt(strId));
    for(let id of bookIds) {
      const book = await this.booksService.getById(id);
      const bookDto = new BookDto();  
      bookDto.available = book.available - 1;
      await this.booksService.update(id, bookDto);
    }
    return await this.purchasesRepository.save(purchase);
  }


  async getPurchaseById(id: number): Promise<Purchase> {
    return this.purchasesRepository.findOne({ where: {id: id }});
  }

}