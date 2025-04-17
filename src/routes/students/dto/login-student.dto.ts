import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginStudentDto {
  @IsNotEmpty({message: 'Debe ser una cadena de caracteres'})
  nickname: string;
  @IsNotEmpty({ message: 'El password es Obligatorio' })
  password: string;
}
