import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { Bet } from '../bet/bet.model';
import { BetService } from '../bet/bet.service';
import { Challenge, CreateChallengeInput } from './challenge.model';
import { ChallengeService } from './challenge.service';

@Resolver(of => Challenge)
export class ChallengeResolver {
  constructor(
    private readonly challengeService: ChallengeService,
    private readonly betService: BetService,
  ) {}

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

  @ResolveProperty(returns => [Bet])
  async bets(@Parent() challenge: Challenge) {
    return this.betService.findAllByChallengeId(challenge.id);
  }

  @ResolveProperty(returns => Int)
  async pot(@Parent() challenge: Challenge) {
    return this.bets(challenge).then(bets =>
      bets.reduce((sum, { amount }) => (sum += amount), 0),
    );
  }
}
