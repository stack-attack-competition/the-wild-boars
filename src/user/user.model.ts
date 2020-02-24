import { Field, ObjectType, InputType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(type => String, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(type => Boolean, { nullable: true })
  @Column({ default: false })
  isDeleted?: boolean;

  @Field(type => String)
  @Column()
  email: string;

  @Field(type => String)
  @Column()
  password: string;

  @Field(type => String)
  @Column()
  firstName: string;

  @Field(type => String)
  @Column()
  lastName: string;

  @Field(type => String, { nullable: true })
  @Column({ nullable: true })
  pictureUrl?: string;
}

@InputType()
export class CreateUserInput {
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
export class UpdateUserInput {
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
