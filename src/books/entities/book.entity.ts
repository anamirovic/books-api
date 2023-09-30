// import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
// import { Purchase } from 'src/purchase/entities/purchase.entity';

// @Entity()
// export class Book{
//     @PrimaryGeneratedColumn()
//     id:number;

//     @Column()
//     title:string;

//     @Column()
//     author: string;

//     @Column()
//     price: number;

//     @Column()
//     available: number;

//     @Column()
//     imageurl: string;

//     @OneToMany(() => Purchase, (purchase) => purchase.book)
//     purchases: Purchase[];
   

// }

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @Column()
  available: number;

  @Column()
  imageurl: string;

}

