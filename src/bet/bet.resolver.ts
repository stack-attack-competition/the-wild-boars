import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Bet, CreateBetInput } from './bet.model';
import { BetService } from './bet.service';

@Resolver(of => Bet)
export class BetResolver {
  constructor(
    private readonly betService: BetService,
    private readonly userService: UserService,
  ) {}

  @Query(returns => [Bet])
  async bets() {
    return this.betService.findAll();
  }

  @Query(returns => Bet, { nullable: true })
  async bet(@Args({ name: 'id', type: () => String }) id: string) {
    return this.betService.findOne(id);
  }

  @Mutation(returns => Bet)
  async createBet(@Args('bet') bet: CreateBetInput) {
    return this.betService.create(bet);
  }

  @ResolveProperty(returns => User)
  async author(@Parent() bet: Bet) {
    return this.userService.findOne(bet.authorId);
  }
}
