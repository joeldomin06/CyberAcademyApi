import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArchivementsTypeDto } from './dto/create-archivements_type.dto';
import { UpdateArchivementsTypeDto } from './dto/update-archivements_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArchivementsType } from './entities/archivements_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArchivementsTypeService {
  constructor(
    @InjectRepository(ArchivementsType)
    private readonly archivementsTypeRepository: Repository<ArchivementsType>
  ){}
  create(createArchivementsTypeDto: CreateArchivementsTypeDto) {
    return this.archivementsTypeRepository.save(createArchivementsTypeDto);
  }

  findAll() {
    return this.archivementsTypeRepository.find();
  }

  async findOne(id: number) {
    const archType = await this.archivementsTypeRepository.findOneBy({id})
    if(!archType) throw new NotFoundException("No se a encontrado el tipo de logro")
    return archType;
  }

  async update(id: number, updateArchivementsTypeDto: UpdateArchivementsTypeDto) {
    const archType = await this.findOne(id)
    return await this.archivementsTypeRepository.update(archType,updateArchivementsTypeDto);
  }

  async remove(id: number) {
    const archType = await this.findOne(id)
    await this.archivementsTypeRepository.remove(archType)
    return {message: `se ha removido el tipo de logro de id : ${id}`};
  }
}
