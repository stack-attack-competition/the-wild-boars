import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ChallengeModule } from '../challenge/challenge.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => ChallengeModule),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
