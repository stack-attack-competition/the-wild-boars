import { Field, ObjectType, Int, InputType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Bet {
  @Field(type => String, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(type => Boolean)
  @Column({ default: true })
  isDeleted?: boolean;

  @Field(type => String)
  @Column()
  authorId: string;

  @Field(type => String)
  @Column()
  challengeId: string;

  @Field(type => Boolean)
  @Column()
  inFavor: boolean;

  @Field(type => Int)
  @Column()
  amount: number;

  @Field(type => Int, { nullable: true })
  @Column({ nullable: true })
  result?: number;
}

@InputType()
export class CreateBetInput {
  @Field(type => String)
  authorId: string;

  @Field(type => String)
  challengeId: string;

  @Field(type => Boolean)
  inFavor: boolean;

  @Field(type => Int)
  amount: number;
}
