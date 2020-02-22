import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Challenge {
  @Field(type => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(type => Boolean)
  @Column()
  isDeleted: boolean;

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
  @Column()
  isActive: boolean;

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
