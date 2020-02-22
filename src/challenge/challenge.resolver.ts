import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';

import { Challenge } from './challenge.model';
import { ChallengeService } from './challenge.service';
import { CreateChallengeInput } from './challenge.dto';

@Resolver(of => Challenge)
export class ChallengeResolver {
  constructor(private readonly challengeService: ChallengeService) {}

  @Query(returns => Challenge, { nullable: true })
  async challenge(@Args({ name: 'id', type: () => String }) id: string) {
    return this.challengeService.findOne(id);
  }

  @Query(returns => [Challenge])
  async challenges() {
    return this.challengeService.findAll();
  }

  @Mutation(returns => Challenge)
  async createChallenge(@Args('challenge') challenge: CreateChallengeInput) {
    return this.challengeService.create(challenge);
  }
}
