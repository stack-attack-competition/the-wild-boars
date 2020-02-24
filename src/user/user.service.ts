import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from '../data/seed.json';
import { CreateUserInput, UpdateUserInput, User } from './user.model';

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
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }

  async create(createUserDto: CreateUserInput) {
    const user: User = {
      ...createUserDto,
      isDeleted: false,
    };
    return await this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserInput) {
    return await this.userRepository.save({ id, ...updateUserDto });
  }
}
