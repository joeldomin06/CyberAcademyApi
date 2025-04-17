import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComponentsTypeDto } from './dto/create-components_type.dto';
import { UpdateComponentsTypeDto } from './dto/update-components_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentsType } from './entities/components_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComponentsTypesService {
  constructor(
    @InjectRepository(ComponentsType)
    private readonly componentsTypeRepository: Repository<ComponentsType>
  ){}
  async create(createComponentsTypeDto: CreateComponentsTypeDto) {
    return await this.componentsTypeRepository.save(createComponentsTypeDto);
  }

  async findAll() {
    return this.componentsTypeRepository.find();
  }

  async findOne(id: number) {
    return await this.componentsTypeRepository.findOneBy({id});
  }

  async update(id: number, updateComponentsTypeDto: UpdateComponentsTypeDto) {
    const component_type = await this.findOne(id)
    if(!component_type)
    {
      let errors: string[] = []
      errors.push("ComponentType no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(component_type,updateComponentsTypeDto)
    return this.componentsTypeRepository.save(component_type);
  }

  remove(id: number) {
    return `This action removes a #${id} componentsType`;
  }
}
