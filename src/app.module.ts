import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Challenge } from './challenge/challenge.model';
import { ChallengeModule } from './challenge/challenge.module';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { BetModule } from './bet/bet.module';
import { Bet } from './bet/bet.model';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: true,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [User, Challenge, Bet],
    }),
    UserModule,
    ChallengeModule,
    BetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
