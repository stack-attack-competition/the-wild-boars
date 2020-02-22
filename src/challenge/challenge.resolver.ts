import { Args, Query, Resolver } from '@nestjs/graphql';
import { Challenge } from './challenge.model';
import { ChallengeService } from './challenge.service';

@Resolver(of => Challenge)
export class ChallengeResolver {
  constructor(private readonly challengeService: ChallengeService) {}

  @Query(returns => Challenge, { nullable: true })
  async challenge(@Args({ name: 'id', type: () => String }) id: string) {
    return this.challengeService.findOne(id);
    // return this.userService.getById(id);
  }

  @Query(returns => [Challenge])
  async challenges() {
    return this.challengeService.findAll();
    // return this.challengeService.getAll();
  }

  // @ResolveProperty()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
