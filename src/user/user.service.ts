import { Injectable } from '@nestjs/common';
import { USERS } from './user.data';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor() {}

  async getAll(): Promise<User[]> {
    return USERS;
  }

  async getById(id: string): Promise<User | undefined> {
    return USERS.then(users => users.find(user => user.id === id));
  }
}
