import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Course } from './course/course.entity';
import { CourseWithLaboratory } from './course/courseWithLaboratory.entity';
import { CourseProfessor } from './entities/courseProfessor.entity';
import { EvaluationNote } from './entities/evaluationNote.entity';
import { EvaluationNoteWithLaboratory } from './entities/evaluationNoteWithLaboratory.entity';
import { StudentCourseProfessor } from './entities/studentCourseProfessor.entity';
import { Professor } from './professor/professor.entity';
import { Student } from './student/student.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'challenge',
      entities: [
        Student,
        Course,
        Professor,
        CourseWithLaboratory,
        EvaluationNote,
        EvaluationNoteWithLaboratory,
        CourseProfessor,
        StudentCourseProfessor,
      ],
      synchronize: true,
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
