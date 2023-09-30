// import { Purchase } from 'src/purchase/entities/purchase.entity';
// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';



// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   username: string;

//   @Column()
//   password: string;

//   @Column()
//   email: string;

//   @Column({ type: 'enum', enum: UserRole, default: UserRole.User })
//     role: UserRole;

//   @OneToMany(() => Purchase, (purchase) => purchase.user)
//   purchases: Purchase[];
// }

export enum UserRole {
  Vip = 'vip',
  User = 'user',
}


import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.User })
  role: UserRole;

  @OneToMany(() => Purchase, (purchase) => purchase.user.purchases)
  purchases: Purchase[];
}

