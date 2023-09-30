import { Book } from "src/books/entities/book.entity";
import { Purchase } from "src/purchase/entities/purchase.entity";
import { User } from "src/users/entities/user.entity";
import { ConnectionOptions } from "typeorm";

console.log('Entities:', [Book, Purchase, User]);

export const typeOrmConfig: ConnectionOptions = {
    type:"postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password:"mysecretpassword",
    database:"baza",
    entities: [Book, Purchase, User],
    synchronize: true,
};