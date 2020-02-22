import { Injectable } from '@nestjs/common';
import { USERS } from './user.data';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { deprecate } from 'util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /** @deprecated */
  async getAll(): Promise<User[]> {
    return USERS;
  }

  /** @deprecated */
  async getById(id: string): Promise<User | undefined> {
    return USERS.then(users => users.find(user => user.id === id));
  }

  // Repositiry

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(newUser: User): Promise<User> {
    return this.userRepository.create(newUser);
  }
}
