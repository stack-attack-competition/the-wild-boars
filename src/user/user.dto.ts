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

@InputType()
export class UpdateUserDto {
  @Field(type => String, { nullable: true })
  email?: string;

  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => String, { nullable: true })
  firstName?: string;

  @Field(type => String, { nullable: true })
  lastName?: string;

  @Field(type => String, { nullable: true })
  pictureUrl?: string;
}
