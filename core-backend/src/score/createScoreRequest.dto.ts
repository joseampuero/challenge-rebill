import { ScoreLaboratoryRequest, ScoreRequest } from './scoreRequest.dto';

export class CreateScoreRequest {
  studentId: number;

  professorId: number;

  courseId: number;

  score: ScoreRequest;
}

export class CreateScoreLaboratoryRequest extends CreateScoreRequest {
  score: ScoreLaboratoryRequest;
}
