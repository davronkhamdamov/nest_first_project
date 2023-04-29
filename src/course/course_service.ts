import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course_Entity } from './model/course_untity';
import { CourseModel } from './model/course_model';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course_Entity)
    private readonly courseRepository: Repository<Course_Entity>,
  ) {}
  async getAll() {
    return await this.courseRepository.find();
  }
  async getCourse(id: string) {
    return await this.courseRepository.findOne({ where: { id } });
  }
  async createCourse(id: string, course: CourseModel) {
    try {
      const newCourse = new Course_Entity();
      newCourse.title = course.title;
      newCourse.price = course.price;
      newCourse.author = course.author;
      await this.courseRepository.save(newCourse);

      return { course: newCourse, message: 'Course successfully added' };
    } catch (error) {
      return { message: error.message };
    }
  }
  async updateCourse(id: string, course: CourseModel) {
    try {
      const updatedCourse = await this.getCourse(id);
      if (!updatedCourse) return { message: 'Course not found!' };
      await this.courseRepository.update(id, course);
      return { message: 'Course successfully updated!' };
    } catch (error) {
      return { message: error.message };
    }
  }
  async deleteCourse(id: string) {
    const updatedCourse = await this.getCourse(id);
    if (!updatedCourse) return { message: 'Course not found!' };
    await this.courseRepository.delete(id);
    return { message: 'Course successfully deleted!' };
  }
}
