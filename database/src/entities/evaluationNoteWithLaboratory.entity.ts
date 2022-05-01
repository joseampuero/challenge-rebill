import { Column, Entity } from 'typeorm';
import { EvaluationNote } from './evaluationNote.entity';

@Entity()
export class EvaluationNoteWithLaboratory extends EvaluationNote {
  @Column()
  practical: number;

  average(): number {
    return (this.theoretical + this.practical) / 2;
  }
}
