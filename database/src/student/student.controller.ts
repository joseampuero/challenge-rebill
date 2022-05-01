import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @MessagePattern({ cmd: 'get-students' })
  getAll() {
    return this.studentService.getAll();
  }
}
