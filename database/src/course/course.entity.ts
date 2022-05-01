import { CourseProfessor } from 'src/entities/courseProfessor.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(
    () => CourseProfessor,
    (courseProfessor: CourseProfessor) => courseProfessor.id,
  )
  courseProfessor: CourseProfessor[];
}
