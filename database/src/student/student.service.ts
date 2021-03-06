import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseProfessor } from 'src/entities/courseProfessor.entity';
import { EvaluationNote } from 'src/entities/evaluationNote.entity';
import { StudentCourseProfessor } from 'src/entities/studentCourseProfessor.entity';
import { Repository } from 'typeorm';
import { RegisterDTO } from './register.dto';
import { Student } from './student.entity';
import { StudentAverageDTO } from './studentAverage.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(EvaluationNote)
    private readonly evaluationNoteRepository: Repository<EvaluationNote>,
    @InjectRepository(StudentCourseProfessor)
    private readonly studentCourseProfessorRepository: Repository<StudentCourseProfessor>,
    @InjectRepository(CourseProfessor)
    private readonly courseProfessorRepository: Repository<CourseProfessor>,
  ) {}

  async getAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async get(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne(id);

    if (!student) throw new NotFoundException('No se encontro Estudiante');

    return student;
  }

  async create(student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async update(id, student): Promise<Student> {
    const studentToUpdate = await this.studentRepository.findOne(id);

    if (!studentToUpdate)
      throw new NotFoundException('No se encontro Estudiante');

    const updatedStudent = Object.assign(studentToUpdate, student);

    return await this.studentRepository.save(updatedStudent);
  }

  async remove(id: number): Promise<void> {
    const studentToDelete = await this.studentRepository.findOne(id);

    if (!studentToDelete)
      throw new NotFoundException('No se encontro Estudiante');

    await this.studentRepository.delete(id);
  }

  async register(registerDTO: RegisterDTO): Promise<StudentCourseProfessor> {
    const evaluationNote = await this.evaluationNoteRepository.save(
      new EvaluationNote(),
    );

    const currentStudent = await this.studentRepository.findOne(
      registerDTO.studentId,
    );

    const currentCourseProfessor = await this.courseProfessorRepository.findOne(
      {
        where: {
          course: registerDTO.courseId,
          professor: registerDTO.professorId,
        },
      },
    );

    const courseTaken = new StudentCourseProfessor();
    courseTaken.student = currentStudent;
    courseTaken.evaluationNote = evaluationNote;
    courseTaken.courseProfessor = currentCourseProfessor;

    return this.studentCourseProfessorRepository.save(courseTaken);
  }

  async average(id: number): Promise<StudentAverageDTO[]> {
    const allCourseTaken = await this.studentCourseProfessorRepository.find({
      where: { student: id },
      relations: [
        'evaluationNote',
        'courseProfessor',
        'courseProfessor.course',
        'courseProfessor.professor',
      ],
    });
    const allCourseAverage = [];
    allCourseTaken.forEach((c) =>
      allCourseAverage.push(
        new StudentAverageDTO(
          c.courseProfessor.course.name,
          c.courseProfessor.professor.name,
          c.evaluationNote.average(),
        ),
      ),
    );

    return allCourseAverage;
  }
}
