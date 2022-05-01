import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { StudentDTO } from './student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @MessagePattern({ cmd: 'get-students' })
  @Get()
  getAll() {
    return this.studentService.getAll();
  }

  @MessagePattern({ cmd: 'new-student' })
  @Post()
  async create(@Body() studentDTO: StudentDTO) {
    return this.studentService.create(studentDTO);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() studentDTO: StudentDTO) {
    return this.studentService.update(id, studentDTO);
  }

  @Delete(':id')
  async delete(@Body('id') id: number) {
    this.studentService.remove(id);
  }
}
