import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/course/course.entity';
import { CourseProfessor } from 'src/entities/courseProfessor.entity';
import { EvaluationNote } from 'src/entities/evaluationNote.entity';
import { StudentCourseProfessor } from 'src/entities/studentCourseProfessor.entity';
import { Repository } from 'typeorm';
import { AssingDTO } from './assign.dto';
import { Professor } from './professor.entity';
import { UpdateScoreDTO } from './updateScore.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
    @InjectRepository(CourseProfessor)
    private readonly courseProfessorRepository: Repository<CourseProfessor>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(StudentCourseProfessor)
    private readonly studentCourseProfessorRepository: Repository<StudentCourseProfessor>,
    @InjectRepository(EvaluationNote)
    private readonly evaluationNoteRepository: Repository<EvaluationNote>,
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

  async update(id, professor): Promise<Professor> {
    const professorToUpdate = await this.professorRepository.findOne(id);

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

  async assign(assingDTO: AssingDTO): Promise<CourseProfessor> {
    const currentCourse = await this.courseRepository.findOne(
      assingDTO.courseId,
    );

    const currentProfessor = await this.get(assingDTO.professorId);

    const courseProfessor = new CourseProfessor();
    courseProfessor.course = currentCourse;
    courseProfessor.professor = currentProfessor;
    courseProfessor.startDate = new Date();

    return await this.courseProfessorRepository.save(courseProfessor);
  }

  async evaluate(updateScoreDTO: UpdateScoreDTO): Promise<EvaluationNote> {
    const courseTaken = await this.studentCourseProfessorRepository.findOne(
      updateScoreDTO.courseTakenId,
      { relations: ['evaluationNote'] },
    );

    if (!courseTaken) throw new NotFoundException('No se encontro Cursada');

    const scoreToUpdate = Object.assign(
      courseTaken.evaluationNote,
      updateScoreDTO.score,
    );

    return await this.evaluationNoteRepository.save(scoreToUpdate);
  }
}
