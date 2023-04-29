import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { user } from './model/user_model';
import { UserService } from './users_service';

@Controller('user')
export class UserController {
  constructor(private UserSerice: UserService) {}
  @Get(':id')
  async getUser(@Param() params: { id: string }) {
    const user = await this.UserSerice.GetUser(params.id);
    return user;
  }
  @Put(':id')
  async putUser(@Param() params: { id: string }, @Body() user: user) {
    const Founded = await this.UserSerice.UpdateUser(params.id, user);
    return Founded;
  }
  @Delete(':id')
  async deleteUser(@Param() params: { id: string }) {
    const Founded = await this.UserSerice.DeleteUser(params.id);
    return Founded;
  }
  @Post()
  async createUser(@Body() user: user) {
    const newUser = await this.UserSerice.CreateUser(user);
    return newUser;
  }
}
