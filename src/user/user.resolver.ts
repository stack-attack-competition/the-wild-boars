import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { User } from './user.model';
import { UserService } from './user.service';
import { NewUserInput } from './user.dto';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query(returns => User, { nullable: true })
  async user(@Args({ name: 'id', type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(returns => User)
  async createUser(@Args('newUserData') newUserData: NewUserInput) {
    return this.userService.create(newUserData);
  }

  // @ResolveProperty()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
