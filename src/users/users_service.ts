import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './model/user_untity';
import { user } from './model/user_model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async GetUser(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }
  async CreateUser(user: user) {
    try {
      const User = new UserEntity();
      User.name = user.name;
      User.email = user.email;
      User.password = user.password;
      User.age = user.age;
      await this.userRepository.save(User);
      return User;
    } catch (error) {
      return { message: error.message };
    }
  }
  async DeleteUser(id: string) {
    const user = await this.GetUser(id);
    if (!user) return { message: 'User not found' };
    await this.userRepository.delete(id);
    return { message: 'User deleted!' };
  }
  async UpdateUser(id: string, user: user) {
    try {
      const userEntity = await this.GetUser(id);
      if (!userEntity) return { message: 'User not found' };
      await this.userRepository.update(id, user);
      return { message: 'User updated!' };
    } catch (error) {
      return { message: error.message };
    }
  }
}
