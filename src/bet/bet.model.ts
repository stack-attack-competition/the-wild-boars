import { Field, ObjectType, Int } from 'type-graphql';
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
  author: string;

  @Field(type => String)
  @Column()
  challenge: string;

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
