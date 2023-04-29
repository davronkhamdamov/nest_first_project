import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarsEntity } from './model/cars_entity';
import { cars } from './model/car_model';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarsEntity)
    private readonly carsRepository: Repository<CarsEntity>,
  ) {}

  async createCar({ title, price }: cars) {
    try {
      const car = new CarsEntity();
      car.price = price;
      car.title = title;
      await this.carsRepository.save(car);
      return car;
    } catch (error) {
      return { message: error.message };
    }
  }

  async getCars() {
    return await this.carsRepository.find();
  }

  async getCar(id: string): Promise<any> {
    return await this.carsRepository.findOne({ where: { id } });
  }

  async updateCar(id: string, car: cars): Promise<any> {
    try {
      const findUser = await this.getCar(id);
      if (!findUser) return { message: 'Car not found' };
      await this.carsRepository.update(id, car);
      return {
        message: 'Car updated!',
      };
    } catch (error) {
      return { message: error.message };
    }
  }
  async deleteCar(id: string) {
    const findUser = await this.getCar(id);
    if (!findUser) return { message: 'Car not found' };
    await this.carsRepository.delete(id);
    return { message: 'Car deleted!' };
  }
}
