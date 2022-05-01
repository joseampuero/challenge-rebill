import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/course.entity';
import { CourseProfessor } from 'src/entities/courseProfessor.entity';
import { EvaluationNote } from 'src/entities/evaluationNote.entity';
import { StudentCourseProfessor } from 'src/entities/studentCourseProfessor.entity';
import { ProfessorController } from './professor.controller';
import { Professor } from './professor.entity';
import { ProfessorService } from './professor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Professor,
      CourseProfessor,
      Course,
      StudentCourseProfessor,
      EvaluationNote,
    ]),
  ],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
