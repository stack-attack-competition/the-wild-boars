import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param() { id }): Promise<User> {
    return this.userService.getById(id);
  }
}
