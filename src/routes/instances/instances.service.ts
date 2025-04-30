import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstanceDto } from './dto/create-instance.dto';
import { UpdateInstanceDto } from './dto/update-instance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Instance } from './entities/instance.entity';
import { Repository } from 'typeorm';
import { Student } from '../students/entities/student.entity';
import { GetRandomInt } from 'src/utils/random';
import { GetFeedback, GetNewLevel } from 'src/utils/Score';

@Injectable()
export class InstancesService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Instance)
    private readonly instanceRepository: Repository<Instance>
  ){}
  async create(createInstanceDto: CreateInstanceDto) {
    const {studentId, typeLab, subinstances} = createInstanceDto;
    const typeNom = typeLab.toLowerCase()
    const student = await this.studentRepository.findOneBy({id:studentId})
    if(!student) 
      throw new NotFoundException('El estudiante no ha sido encontrado');
    if(typeNom != "phishing" && typeNom != "ddos" && typeNom != "worm")
      throw new ConflictException("No existe el tipo")
    const subinstance = GetRandomInt(subinstances,1)
    const instance = this.instanceRepository.create()
    instance.student = student
    instance.completed = false
    instance.score = 0
    instance.hintsUsed = 0
    instance.time = ""
    instance.typeLab = typeLab
    instance.subInstanceId = subinstance
    const savedInstance = await this.instanceRepository.save(instance)
    return {
      id: savedInstance.id,
      subInstanceId: savedInstance.subInstanceId
    }
  }

  async findAll() {
    return await this.instanceRepository.find();
  }

  async findOne(id: number) {
    const instance = await this.instanceRepository.findOneBy({id})
    if(!instance)
      throw new NotFoundException('La instancia no ha sido encontrado');
    return instance;
  }

  async update(id: number, updateInstanceDto: UpdateInstanceDto) {
    const {score} = updateInstanceDto;
    const instance = await this.instanceRepository.findOne({
      where: {
        id
      },
      relations: ["student"]
    })
    if(!instance)
      throw new NotFoundException('La instancia no ha sido encontrado');
    const student = instance.student;
    const newLevel = GetNewLevel(student.level,score)
    student.level += Number(Number(newLevel).toFixed(2))
    const savedStudent = await this.studentRepository.save(student);
    Object.assign(instance,updateInstanceDto)
    await this.instanceRepository.save(instance)
    const feedback = GetFeedback(score)
    return {
      newLevel: savedStudent.level,
      feedback
    }
  }

  remove(id: number) {
    return `This action removes a #${id} instance`;
  }
}
