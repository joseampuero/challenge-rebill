import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
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
}
