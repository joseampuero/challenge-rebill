import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseDTO } from './course.dto';
import { Course } from './course.entity';
import { CourseWithLaboratoryDTO } from './courseWithLaboratory.dto';
import { CourseWithLaboratory } from './courseWithLaboratory.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(CourseWithLaboratory)
    private readonly courseWithLaboratoryRepository: Repository<CourseWithLaboratory>,
  ) {}

  async getAll(): Promise<Course[]> {
    const courseWithLaboratory =
      await this.courseWithLaboratoryRepository.find();
    const courses = await this.courseRepository.find();
    return courses.concat(courseWithLaboratory);
  }

  async get(id: number): Promise<Course> {
    const course = await this.courseRepository.findOne(id);

    if (!course) throw new NotFoundException('No se encontro Curso');

    return course;
  }

  async create(course: CourseDTO): Promise<Course> {
    return this.courseRepository.save(course);
  }

  async createWithLaboratory(
    course: CourseWithLaboratoryDTO,
  ): Promise<CourseWithLaboratory> {
    return this.courseWithLaboratoryRepository.save(course);
  }

  async update(id, course): Promise<Course> {
    const courseToUpdate = await this.courseRepository.findOne(id);

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
