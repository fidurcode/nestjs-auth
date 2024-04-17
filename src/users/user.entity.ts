import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
}
