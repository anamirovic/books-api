// import { Book } from "src/books/entities/book.entity";
// import { User } from "src/users/entities/user.entity";
// import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class Purchase {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => User, (user) => user.id)
//   user: User;

//   @ManyToOne(() => Book, (book) => book.id)
//   book: Book;

//   @Column()
//   purchaseDate: Date;

// }
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from "src/books/entities/book.entity";
 import { User } from "src/users/entities/user.entity";

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => User, (user) => user.purchases)
  user: User;
  

  // Koristite Column() za čuvanje stringa koji sadrži više ID-jeva knjiga
  @Column()
  bookIds: string;

  @Column()
  purchaseDate: Date;
}



