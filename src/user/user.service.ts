import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.model';
import { NewUserInput } from './user.dto';
import { users } from '../data/seed.json';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    this.userRepository.save(users);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }

  async create(newUserData: NewUserInput) {
    const newUser: User = {
      ...newUserData,
      isDeleted: false,
    };
    return this.userRepository.save(newUser);
  }
}
