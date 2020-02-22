import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class NewBetInput {
  @Field(type => String)
  authorId: string;

  @Field(type => String)
  challengeId: string;

  @Field(type => Boolean)
  inFavor: boolean;

  @Field(type => Int)
  amount: number;
}
