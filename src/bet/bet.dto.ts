import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class NewBetInput {
  @Field(type => String)
  author: string;

  @Field(type => String)
  challenge: string;

  @Field(type => Boolean)
  inFavor: boolean;

  @Field(type => Int)
  amount: number;
}
