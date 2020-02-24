import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { bets } from '../data/seed.json';
import { Bet, CreateBetInput } from './bet.model';

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

  async create(bet: CreateBetInput) {
    return this.betRepository.save(bet);
  }
}
