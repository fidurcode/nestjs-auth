import { IsString, IsNumber, IsOptional } from 'class-validator';

export class User {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() @IsOptional() readonly email: string;
  @IsString() readonly username: string;
  @IsString() readonly password: string;
}
