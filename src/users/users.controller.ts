import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add')
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get(':id')
  async profile(@Param('id') id: string): Promise<User> {
    return this.usersService.get(parseInt(id));
  }

  @Patch(':id')
  async editProfile(
    @Param('id') id: string,
    @Body() updateUser: User,
  ): Promise<User> {
    return this.usersService.edit(parseInt(id), updateUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(parseInt(id));
  }

  @Get()
  async all(): Promise<User[]> {
    return this.usersService.getAll();
  }
}
