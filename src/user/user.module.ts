import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, UserResolver],
  controllers: [UserController],
  exports: [UserService],
})
export class UsersModule {}
