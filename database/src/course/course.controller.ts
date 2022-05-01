import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @MessagePattern({ cmd: 'get-courses' })
  getAll() {
    return this.courseService.getAll();
  }
}
