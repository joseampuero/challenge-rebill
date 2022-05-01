import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseProfessor } from 'src/entities/courseProfessor.entity';
import { EvaluationNote } from 'src/entities/evaluationNote.entity';
import { StudentCourseProfessor } from 'src/entities/studentCourseProfessor.entity';
import { StudentController } from './student.controller';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Student,
      EvaluationNote,
      StudentCourseProfessor,
      CourseProfessor,
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
