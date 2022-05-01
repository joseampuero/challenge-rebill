import { Column, Entity } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class CourseWithLaboratory extends Course {
  @Column()
  laboratoryNumber: number;
}
