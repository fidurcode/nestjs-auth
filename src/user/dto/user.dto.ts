import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
