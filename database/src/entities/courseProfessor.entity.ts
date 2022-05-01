import { Course } from 'src/course/course.entity';
import { Professor } from 'src/professor/professor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseProfessor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @ManyToOne(() => Course, (course: Course) => course.id)
  course: Course;

  @ManyToOne(() => Professor, (professor: Professor) => professor.id)
  professor: Professor;
}
