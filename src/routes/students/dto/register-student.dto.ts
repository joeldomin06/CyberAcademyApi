import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class RegisterStudentDto {
  @IsNotEmpty({ message: 'El Nickname es Obligatorio' })
  nickname: string;
  @IsNotEmpty({ message: 'El password es Obligatorio' })
  password: string;
}
