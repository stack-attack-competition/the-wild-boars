import { Field, ObjectType, InputType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Challenge {
  @Field(type => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(type => Boolean)
  @Column({ default: true })
  isDeleted?: boolean;

  @Field(type => String)
  @Column()
  authorId: string;

  @Field(type => String)
  @Column()
  title: string;

  @Field(type => String)
  @Column()
  description: string;

  @Field(type => Boolean)
  @Column({ default: true })
  isActive?: boolean;

  @Field(type => String)
  @Column()
  endDate: string;

  @Field(type => Boolean, { nullable: true })
  @Column({ nullable: true })
  outcome?: boolean;

  @Field(type => String, { nullable: true })
  @Column({ nullable: true })
  proofUrl?: string;
}

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
