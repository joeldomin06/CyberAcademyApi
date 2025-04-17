import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccesibilityDto } from './dto/create-accesibility.dto';
import { UpdateAccesibilityDto } from './dto/update-accesibility.dto';
import { Repository } from 'typeorm';
import { Accesibility } from './entities/accesibility.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../students/entities/student.entity';

@Injectable()
export class AccesibilitiesService {
  constructor(
    @InjectRepository(Accesibility)
    private readonly accessibilityRespository: Repository<Accesibility>,
    @InjectRepository(Student)
    private readonly studentRespository: Repository<Student>,
  ){}
  async create(createAccesibilityDto: CreateAccesibilityDto) {
    const {studentId} = createAccesibilityDto;
    const student = await this.studentRespository.findOneBy({id:studentId})
    if(!student){
      let errors: string[] = []
      errors.push("Estudiante no encontrado")
      throw new NotFoundException(errors)
    }
    const acc = new Accesibility()
    acc.student = student
    acc.brightness = 0
    acc.contrast = 0
    acc.effectVolume = 80
    acc.musicVolume = 80
    acc.currResolution = "none";
    return await this.accessibilityRespository.save(acc)
  }

  findAll() {
    return `This action returns all accesibilities`;
  }

  async findOne(id: number) {
    return await this.accessibilityRespository.findOneBy({id});
  }

  async update(id: number, updateAccesibilityDto: UpdateAccesibilityDto) {
    const accesibility = await this.findOne(id)
    if(!accesibility){
      let errors: string[] = []
      errors.push("Accesibilidad no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(accesibility,updateAccesibilityDto)
    await this.accessibilityRespository.save(accesibility)
  }

  remove(id: number) {
    return `This action removes a #${id} accesibility`;
  }
}
