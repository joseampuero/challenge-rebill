import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProfessorService } from './professor.service';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @MessagePattern({ cmd: 'get-professors' })
  getAll() {
    return this.professorService.getAll();
  }
}
