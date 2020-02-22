import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Challenge } from './challenge.model';
import { challenges } from '../data/seed.json';
import { CreateChallengeInput } from './challenge.dto';

@Injectable()
export class ChallengeService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  onApplicationBootstrap() {
    this.challengeRepository.save(challenges);
  }

  async findAll() {
    return this.challengeRepository.find();
  }

  findAllByAuthorId(authorId: string) {
    return this.challengeRepository.find({ authorId });
  }

  findOne(id: string) {
    return this.challengeRepository.findOne(id);
  }

  async remove(id: string) {
    await this.challengeRepository.delete(id);
  }

  async create(challenge: CreateChallengeInput) {
    return this.challengeRepository.save(challenge);
  }
}
