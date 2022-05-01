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
import { RegisterDTO } from './register.dto';
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

  @MessagePattern({ cmd: 'update-student' })
  @Put(':id')
  async update(@Param('id') id, @Body() data) {
    return this.studentService.update(data.id, data.studentRequest);
  }

  @MessagePattern({ cmd: 'delete-student' })
  @Delete(':id')
  async delete(@Param('id') id, @Body() data) {
    return this.studentService.remove(data.id);
  }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    return this.studentService.register(registerDTO);
  }

  @MessagePattern({ cmd: 'average' })
  async average(@Body() data) {
    return this.studentService.average(data.id);
  }
}
