import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLaboratoriesCarriedOutDto } from './dto/create-laboratories_carried_out.dto';
import { UpdateLaboratoriesCarriedOutDto } from './dto/update-laboratories_carried_out.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LaboratoriesCarriedOut } from './entities/laboratories_carried_out.entity';
import { Repository } from 'typeorm';
import { Student } from '../students/entities/student.entity';

@Injectable()
export class LaboratoriesCarriedOutService {
  constructor(
    @InjectRepository(LaboratoriesCarriedOut)
    private readonly lcoRepository: Repository<LaboratoriesCarriedOut>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

  ){}
  async create(createLaboratoriesCarriedOutDto: CreateLaboratoriesCarriedOutDto) {
    const {studentId, type} = createLaboratoriesCarriedOutDto
    const student = await this.studentRepository.findOneBy({id:studentId})
    if(!student)
    {
      let errors: string[] = []
      errors.push("Estudiante no encontrado")
      throw new NotFoundException(errors)
    }
    const lco = new LaboratoriesCarriedOut()
    lco.student = student
    lco.type = type
    return await this.lcoRepository.save(lco);
  }
  async createMany(student: Student,types: string[])
  {
    const lcos: LaboratoriesCarriedOut[] = []
    for (let i = 0; i < types.length; i++) {
      const lco = this.lcoRepository.create({student,type: types[i]})
      lcos.push(lco)
    }
    return await this.lcoRepository.save(lcos)
  }

  async findAll() {
    return await this.lcoRepository.find();
  }

  async findOne(id: number) {
    return await this.lcoRepository.findOneBy({id});
  }

  async update(id: number, updateLaboratoriesCarriedOutDto: UpdateLaboratoriesCarriedOutDto) {
    const lco = await this.findOne(id)
    if(!lco)
    {
      let errors: string[] = []
      errors.push("LCO no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(lco,updateLaboratoriesCarriedOutDto)
    return await this.lcoRepository.save(lco);
  }

  remove(id: number) {
    return `This action removes a #${id} laboratoriesCarriedOut`;
  }
}
