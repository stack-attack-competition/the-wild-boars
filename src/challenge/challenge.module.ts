import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Challenge } from './challenge.model';
import { ChallengeResolver } from './challenge.resolver';
import { ChallengeService } from './challenge.service';
import { BetModule } from '../bet/bet.module';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge]), BetModule],
  providers: [ChallengeService, ChallengeResolver],
  exports: [ChallengeService],
})
export class ChallengeModule {}
