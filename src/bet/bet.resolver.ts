import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Bet } from './bet.model';
import { BetService } from './bet.service';
import { NewBetInput } from './bet.dto';

@Resolver(of => Bet)
export class BetResolver {
  constructor(private readonly betService: BetService) {}

  @Query(returns => [Bet])
  async bets() {
    return this.betService.findAll();
  }

  @Query(returns => Bet, { nullable: true })
  async bet(@Args({ name: 'id', type: () => String }) id: string) {
    return this.betService.findOne(id);
  }

  @Mutation(returns => Bet)
  async createBet(@Args('bet') bet: NewBetInput) {
    return this.betService.create(bet);
  }

  // @ResolveProperty()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
