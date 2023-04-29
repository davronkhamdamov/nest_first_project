import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars_controller';
import { CarsService } from './car_service';
import { CarsEntity } from './model/cars_entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarsEntity])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModul {}
