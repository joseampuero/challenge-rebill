import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class EvaluationNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  theoretical: number;
}
