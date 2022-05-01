import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseDTO } from './course.dto';
import { CourseService } from './course.service';
import { CourseWithLaboratoryDTO } from './courseWithLaboratory.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAll() {
    return this.courseService.getAll();
  }

  @Post()
  async create(@Body() courseDTO: CourseDTO) {
    return this.courseService.create(courseDTO);
  }

  @Post('withLaboratory')
  async createWithLaboratory(
    @Body() courseWithLaboratoryDTO: CourseWithLaboratoryDTO,
  ) {
    return this.courseService.createWithLaboratory(courseWithLaboratoryDTO);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() courseDTO: CourseDTO) {
    return this.courseService.update(id, courseDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.courseService.remove(id);
  }
}
