import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentRequest } from './studentRequest.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.getAll();
  }

  @Get('average/:id')
  get(@Param('id') id: number) {
    return this.studentService.getAverage(id);
  }

  @Post()
  create(@Body() studentRequest: StudentRequest) {
    return this.studentService.create(studentRequest);
  }

  @Put(':id')
  update(@Param('id') id, @Body() studentRequest: StudentRequest) {
    return this.studentService.update(id, studentRequest);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.studentService.delete(id);
  }
}
