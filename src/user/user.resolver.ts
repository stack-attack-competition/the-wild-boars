import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.model';
import { UserService } from './user.service';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeService } from '../challenge/challenge.service';

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
  async createUser(@Args('user') createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Mutation(returns => User)
  async updateUser(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args('user') updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @ResolveProperty(type => [Challenge])
  challenges(@Parent() { id: userId }: User): Promise<Challenge[]> {
    return this.challengeService.findAllByAuthorId(userId);
  }

  // @ResolveProperty()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
