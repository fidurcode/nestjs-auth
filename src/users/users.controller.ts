import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dtos/user.dto';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtGuard)
  @Get()
  async all(): Promise<User[]> {
    return this.usersService.getAll();
  }
}
