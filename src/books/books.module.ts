import { Module, forwardRef } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { PurchasesModule } from 'src/purchase/purchases.module';

@Module({
    imports: [TypeOrmModule.forFeature([Book]), forwardRef(() => PurchasesModule)],
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService]
  })
export class BooksModule {}
