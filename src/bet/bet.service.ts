import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Bet } from './bet.model';
import { BETS } from './bet.data';
import { NewBetInput } from './bet.dto';

@Injectable()
export class BetService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
  ) {}

  async onApplicationBootstrap() {
    this.betRepository.save(BETS);
  }

  async findAll() {
    return this.betRepository.find();
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
