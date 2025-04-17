import {
  Controller,
  Get,
  Post,
  Body, Param,
  Delete,
  HttpCode
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { RegisterStudentDto } from './dto/register-student.dto';
import { LoginStudentDto } from './dto/login-student.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('register')
  register(@Body() registerStudentDto: RegisterStudentDto) {
    return this.studentsService.register(registerStudentDto);
  }
  @Post('login')
  @HttpCode(200)
  login(@Body() loginStudentDto: LoginStudentDto) {
    return this.studentsService.login(loginStudentDto);
  }

  @Get(':id/accesibilities')
  @HttpCode(200)
  findAccesibility(@Param('id', IdValidationPipe) id: string){
    return this.studentsService.findAcessibility(+id)
  }
  @Get(':id/personalizations')
  @HttpCode(200)
  findPersonalization(@Param('id', IdValidationPipe) id: string){
    return this.studentsService.findPersonalization(+id)
  }
  @Get(':id/archivements')
  @HttpCode(200)
  findAllArchivement(@Param('id', IdValidationPipe) id: string){
    return this.studentsService.findAllArchivement(+id)
  }
  @Get(':id/minigames')
  @HttpCode(200)
  findMinigame(@Param('id', IdValidationPipe) id: string){
    return this.studentsService.findMinigame(+id)
  }
  @Get(':id/laboratories-carried-out')
  @HttpCode(200)
  findAllLCO(@Param('id', IdValidationPipe) id: string){
    return this.studentsService.findAllLCO(+id)
  }
  @Get(':id/theoretical-questionnaires')
  @HttpCode(200)
  findAllTQ(@Param('id', IdValidationPipe) id: string){
    return this.studentsService.findAllTQ(+id)
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.studentsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.studentsService.remove(+id);
  }
}
