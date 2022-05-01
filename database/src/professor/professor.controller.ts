import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProfessorDTO } from './professor.dto';
import { ProfessorService } from './professor.service';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Get()
  getAll() {
    return this.professorService.getAll();
  }

  @Post()
  async create(@Body() professorDTO: ProfessorDTO) {
    return this.professorService.create(professorDTO);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() professorDTO: ProfessorDTO) {
    return this.professorService.update(id, professorDTO);
  }

  @Delete(':id')
  async delete(@Body('id') id: number) {
    this.professorService.remove(id);
  }
}
