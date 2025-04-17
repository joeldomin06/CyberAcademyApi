import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArchivementDto } from './dto/create-archivement.dto';
import { UpdateArchivementDto } from './dto/update-archivement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Archivement } from './entities/archivement.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Student } from '../students/entities/student.entity';
import { ArchivementsType } from '../archivements_type/entities/archivements_type.entity';

@Injectable()
export class ArchivementsService {
  constructor(
    @InjectRepository(Archivement)
    private readonly archivementRepository: Repository<Archivement>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(ArchivementsType)
    private readonly archivementsTypeRepository: Repository<ArchivementsType>,
  ){}
  async create(createArchivementDto: CreateArchivementDto) {
    const {studentId, archivementTypeId} = createArchivementDto
    const student = await this.studentRepository.findOneBy({id:studentId})
    const archivementType = await this.archivementsTypeRepository.findOneBy({id:archivementTypeId})
    if (!student || !archivementType) {
      throw new NotFoundException("Student group o Archivement type no encontrados.");
    }
    const archivement = this.archivementRepository.create({
      student,
      archivementType
    })
    return await this.archivementRepository.save(archivement);
  }

  async createMany(student: Student)
  {
    const archivements: Archivement[] = []
    const archivements_types = await this.archivementsTypeRepository.find()
    for (let i = 0; i < archivements_types.length; i++) {
      const archivement = this.archivementRepository.create({
        student,
        archivementType: archivements_types[i]
      })
      archivements.push(archivement)
    }
    return await this.archivementRepository.save(archivements)
  }

  async findAll(studentId?: number, archivementTypeId?: number) {
    const options: FindManyOptions<Archivement> = {}
    if(studentId){
      options.where = {...options.where, student: {id: studentId}}
    }
    if(archivementTypeId){
      options.where = {...options.where, archivementType: {id: archivementTypeId}}
    }
    return await this.archivementRepository.find(options);
  }

  async findOne(id: number) {
    const options: FindOneOptions = {
      where: {
        id
      },
      relations: {
        archivementType: true
      }
    }
    const archivement = await this.archivementRepository.findOne(options)
    if(!archivement) throw new NotFoundException("el logro no ha sido encontrado")
    return archivement;
  }

  async update(id: number, updateArchivementDto: UpdateArchivementDto) {
    const archivement = await this.findOne(id)
    return await this.archivementRepository.update(archivement,updateArchivementDto);
  }

  async remove(id: number) {
    const archivement = await this.findOne(id)
    await this.archivementRepository.remove(archivement)
    return {message: "se ha eliminado el archivement"};
  }
}
