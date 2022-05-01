import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CourseWithLaboratory } from './courseWithLaboratory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, CourseWithLaboratory])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
