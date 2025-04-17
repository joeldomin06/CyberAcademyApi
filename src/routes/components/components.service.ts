import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from './entities/component.entity';
import { Repository } from 'typeorm';
import { ComponentsType } from '../components_types/entities/components_type.entity';
import { PersonalizationsService } from '../personalizations/personalizations.service';
import { Personalization } from '../personalizations/entities/personalization.entity';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectRepository(Component)
    private readonly componentRepository: Repository<Component>,
    @InjectRepository(ComponentsType)
    private readonly componentTypeRepository: Repository<ComponentsType>,
    @InjectRepository(Personalization)
    private readonly personalizationRepository: Repository<Personalization>,
  ){}
  async create(createComponentDto: CreateComponentDto) {
    const {personalizationId, componentTypeId, isUnlocked} = createComponentDto;
    const personalization = await this.personalizationRepository.findOneBy({id:personalizationId})
    const component_type = await this.componentTypeRepository.findOneBy({id:componentTypeId});
    if(!personalization || !component_type){
      let errors: string[] = []
      if(!personalization) errors.push("Personalization no encontrado")
      if(!component_type) errors.push("Component Type no encontrado")
      throw new NotFoundException(errors)
    }
    const comp = new Component()
    comp.personalization = personalization
    comp.componentType = component_type
    comp.isUnlocked = isUnlocked
    return await this.componentRepository.save(comp);
  }
  createMany(components_types: ComponentsType[]){
    const components: Component[] = []
    for (let i = 0; i < components_types.length; i++) {
      const component_type = components_types[i]
      const component = this.componentRepository.create({componentType: component_type})
      components.push(component)
    }
    return components
  }

  findAll() {
    return `This action returns all components`;
  }

  async findOne(id: number) {
    return await this.componentRepository.findOneBy({id});
  }

  async update(id: number, updateComponentDto: UpdateComponentDto) {
    const component = await this.findOne(id)
    if(!component){
      let errors: string[] = []
      errors.push("Componente no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(component,updateComponentDto)
    await this.componentRepository.save(component);
  }

  remove(id: number) {
    return `This action removes a #${id} component`;
  }
}
