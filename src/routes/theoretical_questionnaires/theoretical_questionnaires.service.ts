import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTheoreticalQuestionnaireDto } from './dto/create-theoretical_questionnaire.dto';
import { UpdateTheoreticalQuestionnaireDto } from './dto/update-theoretical_questionnaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TheoreticalQuestionnaire } from './entities/theoretical_questionnaire.entity';
import { Repository } from 'typeorm';
import { Student } from '../students/entities/student.entity';

@Injectable()
export class TheoreticalQuestionnairesService {
  constructor(
    @InjectRepository(TheoreticalQuestionnaire)
    private readonly tqRepository: Repository<TheoreticalQuestionnaire>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){}
  async create(createTheoreticalQuestionnaireDto: CreateTheoreticalQuestionnaireDto) {
    const {studentId} = createTheoreticalQuestionnaireDto
    const student = await this.studentRepository.findOneBy({id:studentId})
    if(!student)
    {
      let errors: string[] = []
      errors.push("Estudiante no encontrado")
      throw new NotFoundException(errors)
    }
    const tq = new TheoreticalQuestionnaire()
    tq.student = student
    return await this.tqRepository.save(tq);
  }
  async createMany(student: Student, names: string[]){
    const tqs: TheoreticalQuestionnaire[] = [];
    for (let i = 0; i < names.length; i++) {
      const tq = this.tqRepository.create({student,name:names[i]})
      tqs.push(tq)
    }
    return await this.tqRepository.save(tqs)
  }

  async findAll() {
    return await this.tqRepository.find();
  }

  async findOne(id: number) {
    return await this.tqRepository.findOneBy({id});
  }

  async update(id: number, updateTheoreticalQuestionnaireDto: UpdateTheoreticalQuestionnaireDto) {
    const tq = await this.findOne(id)
    if(!tq){
      let errors: string[] = []
      errors.push("TQ no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(tq,updateTheoreticalQuestionnaireDto)
    return this.tqRepository.save(tq);
  }

  remove(id: number) {
    return `This action removes a #${id} theoreticalQuestionnaire`;
  }
}
