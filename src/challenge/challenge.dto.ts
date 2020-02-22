import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateChallengeInput {
  @Field(type => String)
  authorId: string;

  @Field(type => String)
  title: string;

  @Field(type => String)
  description: string;

  @Field(type => String)
  endDate: string;
}
