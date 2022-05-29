import { IsString, IsInt } from 'class-validator';

export class CreateLionDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
