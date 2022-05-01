import { Student } from 'src/student/student.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CourseProfessor } from './courseProfessor.entity';
import { EvaluationNote } from './evaluationNote.entity';

@Entity()
export class StudentCourseProfessor {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Student, (student: Student) => student.id)
  @JoinColumn()
  student: Student;

  @OneToOne(
    () => CourseProfessor,
    (courseProfessor: CourseProfessor) => courseProfessor.id,
  )
  @JoinColumn()
  courseProfessor: CourseProfessor;

  @OneToOne(
    () => EvaluationNote,
    (evaluationNote: EvaluationNote) => evaluationNote.id,
  )
  @JoinColumn()
  evaluationNote: EvaluationNote;
}
