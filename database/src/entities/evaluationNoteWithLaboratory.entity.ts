import { Column, Entity } from 'typeorm';
import { EvaluationNote } from './evaluationNote.entity';

@Entity()
export class EvaluationNoteWithLaboratory extends EvaluationNote {
  @Column()
  practical: number;
}
