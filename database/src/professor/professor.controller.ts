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
import { AssingDTO } from './assign.dto';
import { ProfessorDTO } from './professor.dto';
import { ProfessorService } from './professor.service';
import { UpdateScoreDTO } from './updateScore.dto';

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

  @Post('assign')
  async assign(@Body() assingDTO: AssingDTO) {
    return this.professorService.assign(assingDTO, false);
  }

  @Post('assignWithLaboratory')
  async assignWithLaboratory(@Body() assingDTO: AssingDTO) {
    return this.professorService.assign(assingDTO, true);
  }

  @MessagePattern({ cmd: 'new-score' })
  @Post('evaluate')
  async evaluate(@Body() updateScoreDTO: UpdateScoreDTO) {
    return this.professorService.evaluate(updateScoreDTO);
  }
}
