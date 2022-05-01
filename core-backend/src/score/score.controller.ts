import { Body, Controller, Post } from '@nestjs/common';
import { CreateScoreRequest } from './createScoreRequest.dto';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  create(@Body() scoreRequest: CreateScoreRequest) {
    return this.scoreService.create(scoreRequest);
  }
}
