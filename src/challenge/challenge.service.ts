import { Injectable } from '@nestjs/common';
import { CHALLENGES } from './challenge.data';
import { Challenge } from './challenge.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { deprecate } from 'util';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  /** @deprecated */
  async getAll(): Promise<Challenge[]> {
    return CHALLENGES;
  }

  /** @deprecated */
  async getById(id: string): Promise<Challenge | undefined> {
    return CHALLENGES.then(users =>
      users.find(challenge => challenge.id === id),
    );
  }

  // Repositiry

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
