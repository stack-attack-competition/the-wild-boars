import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/user.model';
import { UsersService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  async getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }
}
