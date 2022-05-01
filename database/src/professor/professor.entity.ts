import { CourseProfessor } from 'src/entities/courseProfessor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  dni: number;

  @Column()
  email: string;

  @OneToMany(
    () => CourseProfessor,
    (courseProfessor: CourseProfessor) => courseProfessor.id,
  )
  courseProfessor: CourseProfessor[];
}
