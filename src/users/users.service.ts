import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(user: User): Promise<User> {
    const newUser: User = this.repo.create(user);
    return await this.repo.save(newUser);
  }

  async get(userId: number): Promise<User> {
    return await this.findUser(userId);
  }

  async edit(userId: number, userData: User): Promise<User> {
    const user: User = await this.findUser(userId);
    if (!user) throw new NotFoundException('User does not exist');

    return await this.repo.save(userData);
  }

  async delete(userId: number): Promise<User> {
    const user: User = await this.findUser(userId);
    if (!user) throw new NotFoundException('User does not exist');

    return await this.repo.remove(user);
  }

  async getAll(): Promise<User[]> {
    return await this.repo.find();
  }

  private findUser(id: number): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }
}
