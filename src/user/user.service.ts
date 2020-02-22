import { Injectable } from '@nestjs/common';
import { USERS } from './user.data';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor() {}

  async getAll(): Promise<User[]> {
    return USERS;
  }

  async findOne(firstName: string): Promise<User | undefined> {
    return USERS.then(users =>
      users.find(user => user.firstName === firstName),
    );
  }
}
