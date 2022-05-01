import { ScoreLaboratoryRequest, ScoreRequest } from './scoreRequest.dto';

export class UpdateScoreRequest {
  courseTakenId: number;

  score: ScoreRequest;
}

export class UpdateScoreLaboratoryRequest extends UpdateScoreRequest {
  score: ScoreLaboratoryRequest;
}
