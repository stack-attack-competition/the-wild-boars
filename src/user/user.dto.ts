import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserDto {
  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

  @Field(type => String)
  firstName: string;

  @Field(type => String)
  lastName: string;
}
