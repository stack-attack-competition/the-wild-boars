import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CHALLENGES } from './challenge.data';
import { Challenge } from './challenge.model';

@Injectable()
export class ChallengeService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  onApplicationBootstrap() {
    this.challengeRepository.save(CHALLENGES);
  }

  findAll() {
    return this.challengeRepository.find();
  }

  findOne(id: string) {
    return this.challengeRepository.findOne(id);
  }

  async remove(id: string) {
    await this.challengeRepository.delete(id);
  }

  async create(newUser: Challenge) {
    return this.challengeRepository.create(newUser);
  }
}
