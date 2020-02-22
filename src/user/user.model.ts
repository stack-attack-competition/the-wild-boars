import { Field, ObjectType } from 'type-graphql';
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
