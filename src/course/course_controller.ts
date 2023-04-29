import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { CourseModel } from './model/course_model';
import { CourseService } from './course_service';

@Controller('course')
export class CourseController {
  constructor(private CourseService: CourseService) {}
  @Get('/')
  async getAll() {
    return await this.CourseService.getAll();
  }
  @Get('/:id')
  async getCource(@Param() params: { id: string }) {
    return await this.CourseService.getCourse(params.id);
  }
  @Put('/:id')
  async updateCourse(
    @Param() params: { id: string },
    @Body() course: CourseModel,
  ) {
    return await this.CourseService.updateCourse(params.id, course);
  }
  @Delete('/:id')
  async deleteCourse(@Param() params: { id: string }) {
    return await this.CourseService.deleteCourse(params.id);
  }
}
