import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMinigameDto } from './dto/create-minigame.dto';
import { UpdateMinigameDto } from './dto/update-minigame.dto';
import { Repository } from 'typeorm';
import { Minigame } from './entities/minigame.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../students/entities/student.entity';

@Injectable()
export class MinigamesService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Minigame)
    private readonly minigameRepository: Repository<Minigame>,
  ){}
  async create(createMinigameDto: CreateMinigameDto) {
    const {studentId} = createMinigameDto;
    const student = await this.studentRepository.findOneBy({id:studentId})
    if(!student){
      let errors: string[] = []
      errors.push("Estudiante no encontrado")
      throw new NotFoundException(errors)
    }
    const minigame = new Minigame()
    minigame.student = student
    minigame.highScoreDDOS = 0
    minigame.highScorePhishing = 0
    minigame.highScoreWorm = 0
    return await this.minigameRepository.save(minigame);
  }

  async findAll() {
    return await this.minigameRepository.find();
  }

  async findOne(id: number) {
    return await this.minigameRepository.findOneBy({id});
  }

  async update(id: number, updateMinigameDto: UpdateMinigameDto) {
    const minigame = await this.findOne(id);
    if(!minigame){
      let errors: string[] = []
      errors.push("Minigame no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(minigame,updateMinigameDto);
    return await this.minigameRepository.save(minigame);
  }

  remove(id: number) {
    return `This action removes a #${id} minigame`;
  }
}
