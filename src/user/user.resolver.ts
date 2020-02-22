import { Resolver, Query, Args } from '@nestjs/graphql';

import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User, { nullable: true })
  async user(@Args({ name: 'id', type: () => String }) id: string) {
    return this.userService.findOne(id);
    // return this.userService.getById(id);
  }

  @Query(returns => [User])
  async users() {
    return this.userService.findAll();
    // return this.userService.getAll();
  }

  // @ResolveProperty()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
