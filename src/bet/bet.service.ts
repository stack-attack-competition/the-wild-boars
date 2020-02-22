import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Bet } from './bet.model';
import { NewBetInput } from './bet.dto';
import { bets } from '../data/seed.json';

@Injectable()
export class BetService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
  ) {}

  async onApplicationBootstrap() {
    this.betRepository.save(bets);
  }

  async findAll() {
    return this.betRepository.find();
  }

  async findAllByChallengeId(challengeId: string) {
    return this.betRepository.find({ challengeId });
  }

  async findOne(id: string) {
    return this.betRepository.findOne(id);
  }

  async remove(id: string) {
    await this.betRepository.delete(id);
  }

  async create(bet: NewBetInput) {
    return this.betRepository.save(bet);
  }
}
