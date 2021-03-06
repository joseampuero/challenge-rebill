import { Body, Controller, Post } from '@nestjs/common';
import {
  UpdateScoreLaboratoryRequest,
  UpdateScoreRequest as UpdateScoreRequest,
} from './updateScoreRequest.dto';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  update(@Body() scoreRequest: UpdateScoreRequest) {
    return this.scoreService.update(scoreRequest);
  }

  @Post('withLaboratory')
  updateWithLaboratory(@Body() scoreRequest: UpdateScoreLaboratoryRequest) {
    return this.scoreService.update(scoreRequest);
  }
}
