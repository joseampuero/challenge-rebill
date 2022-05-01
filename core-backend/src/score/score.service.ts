import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateScoreRequest } from './createScoreRequest.dto';

@Injectable()
export class ScoreService {
  constructor(@Inject('SERVICE') private readonly serviceClient: ClientProxy) {}

  create(createScoreRequest: CreateScoreRequest) {
    return this.serviceClient.send({ cmd: 'new-score' }, createScoreRequest);
  }
}
