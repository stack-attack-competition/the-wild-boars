import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Challenge } from './challenge.model';
import { ChallengeResolver } from './challenge.resolver';
import { ChallengeService } from './challenge.service';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge])],
  providers: [ChallengeService, ChallengeResolver],
  exports: [ChallengeService],
})
export class ChallengeModule {}
