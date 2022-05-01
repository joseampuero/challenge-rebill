import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async getAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async get(id: number): Promise<Course> {
    const course = await this.courseRepository.findOne(id);

    if (!course) throw new NotFoundException('No se encontro Curso');

    return course;
  }

  async create(course): Promise<Course> {
    return this.courseRepository.save(course);
  }

  async update(course): Promise<Course> {
    const courseToUpdate = await this.courseRepository.findOne(course.id);

    if (!courseToUpdate) throw new NotFoundException('No se encontro Curso');

    const updatedCourse = Object.assign(courseToUpdate, course);

    return await this.courseRepository.save(updatedCourse);
  }

  async remove(id: number): Promise<void> {
    const courseToDelete = await this.courseRepository.findOne(id);

    if (!courseToDelete) throw new NotFoundException('No se encontro Curso');

    await this.courseRepository.delete(id);
  }
}
