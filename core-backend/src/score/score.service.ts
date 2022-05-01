import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateScoreRequest } from './updateScoreRequest.dto';

@Injectable()
export class ScoreService {
  constructor(@Inject('SERVICE') private readonly serviceClient: ClientProxy) {}

  update(updateScoreRequest: UpdateScoreRequest) {
    return this.serviceClient.send({ cmd: 'new-score' }, updateScoreRequest);
  }
}
