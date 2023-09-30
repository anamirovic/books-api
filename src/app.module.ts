import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { typeOrmConfig } from 'typeorm.config';
import {TypeOrmModule} from "@nestjs/typeorm";
import { PurchasesModule } from './purchase/purchases.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BooksModule, TypeOrmModule.forRoot(typeOrmConfig), UsersModule, PurchasesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
