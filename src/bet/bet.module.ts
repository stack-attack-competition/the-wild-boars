import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Bet } from './bet.model';
import { BetService } from './bet.service';
import { BetResolver } from './bet.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bet]), UserModule],
  providers: [BetService, BetResolver],
  exports: [BetService],
})
export class BetModule {}
