import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeService } from '../challenge/challenge.service';
import { CreateUserInput, UpdateUserInput, User } from './user.model';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly challengeService: ChallengeService,
  ) {}

  @Query(returns => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query(returns => User, { nullable: true })
  async user(@Args({ name: 'id', type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(returns => User)
  async createUser(@Args('user') createUserDto: CreateUserInput) {
    return this.userService.create(createUserDto);
  }

  @Mutation(returns => User)
  async updateUser(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args('user') updateUserDto: UpdateUserInput,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @ResolveProperty(type => [Challenge])
  challenges(@Parent() { id: userId }: User): Promise<Challenge[]> {
    return this.challengeService.findAllByAuthorId(userId);
  }
}
