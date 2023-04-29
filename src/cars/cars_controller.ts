import { Body, Controller, Param, Get, Post, HttpCode } from '@nestjs/common';
import {
  Delete,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common/decorators';

import { cars } from './model/car_model';
import { FileInterceptor } from '@nestjs/platform-express';
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { CarsService } from './car_service';

@Controller('cars')
export class CarsController {
  constructor(private courseService: CarsService) {}

  @Get('list')
  async getCars() {
    return await this.courseService.getCars();
  }
  @Get(':id')
  @HttpCode(200)
  async getCar(@Param() params: { id: string }) {
    return await this.courseService.getCar(params.id);
  }
  @Post()
  @HttpCode(201)
  async createCar(@Body() car: cars) {
    const new_car = await this.courseService.createCar(car);
    return new_car;
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteCar(@Param() params: { id: string }) {
    return await this.courseService.deleteCar(params.id);
  }
  @Put(':id')
  @HttpCode(200)
  async updateCar(@Param() params: { id: string }, @Body() car: cars) {
    return await this.courseService.updateCar(params.id, car);
  }
}
