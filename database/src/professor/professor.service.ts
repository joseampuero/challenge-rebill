import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './professor.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
  ) {}

  async getAll(): Promise<Professor[]> {
    return this.professorRepository.find();
  }

  async get(id: number): Promise<Professor> {
    const professor = await this.professorRepository.findOne(id);

    if (!professor) throw new NotFoundException('No se encontro Profesor');

    return professor;
  }

  async create(professor): Promise<Professor> {
    return this.professorRepository.save(professor);
  }

  async update(professor): Promise<Professor> {
    const professorToUpdate = await this.professorRepository.findOne(
      professor.id,
    );

    if (!professorToUpdate)
      throw new NotFoundException('No se encontro Profesor');

    const updatedProfessor = Object.assign(professorToUpdate, professor);

    return await this.professorRepository.save(updatedProfessor);
  }

  async remove(id: number): Promise<void> {
    const professorToDelete = await this.professorRepository.findOne(id);

    if (!professorToDelete)
      throw new NotFoundException('No se encontro Profesor');

    await this.professorRepository.delete(id);
  }
}
