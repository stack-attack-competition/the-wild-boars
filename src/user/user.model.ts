import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => String)
  id: string;

  @Field(type => Boolean)
  isDeleted: boolean;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

  @Field(type => String)
  firstName: string;

  @Field(type => String)
  lastName: string;

  @Field(type => String)
  pictureUrl: string;
}
