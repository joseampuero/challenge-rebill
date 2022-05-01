import { ScoreDTO, ScoreLaboratoryDTO } from './score.dto';

export class UpdateScoreDTO {
  courseTakenId: number;

  score: ScoreDTO;
}

export class UpdateScoreLaboratoryDTO extends UpdateScoreDTO {
  score: ScoreLaboratoryDTO;
}
