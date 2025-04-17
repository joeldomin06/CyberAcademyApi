import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalizationDto } from './dto/create-personalization.dto';
import { UpdatePersonalizationDto } from './dto/update-personalization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personalization } from './entities/personalization.entity';
import { Repository } from 'typeorm';
import { ComponentsService } from '../components/components.service';
import { Student } from '../students/entities/student.entity';
import { ComponentsType } from '../components_types/entities/components_type.entity';
import { Component } from '../components/entities/component.entity';

@Injectable()
export class PersonalizationsService {
  constructor(
    private readonly componentService: ComponentsService,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Personalization)
    private readonly personalizationRepository: Repository<Personalization>,
    @InjectRepository(ComponentsType)
    private readonly componentTypeRepository: Repository<ComponentsType>,
    @InjectRepository(Component)
    private readonly componentRepository: Repository<Component>,

  ){}
  async create(createPersonalizationDto: CreatePersonalizationDto) {
    const {studentId} = createPersonalizationDto
    const student = await this.studentRepository.findOneBy({id:studentId})
    if(!student)
    {
      let errors: string[] = []
      errors.push("Estudiante no encontrado")
      throw new NotFoundException(errors)
    }
    const components_types = await this.componentTypeRepository.find()

    const personalization = this.personalizationRepository.create({ student });
    const personalizationSaved = await this.personalizationRepository.save(personalization);

    const components = this.componentService.createMany(components_types);
    for (const component of components) {
      component.personalization = personalizationSaved;
    }
    await this.componentRepository.save(components); // guardamos todos los componentes

    personalizationSaved.components = components;

    return await this.personalizationRepository.save(personalizationSaved);
  }

  async findAll() {
    return `This action returns all personalizations`;
  }

  async findOne(id: number) {
    return await this.personalizationRepository.findOneBy({id});
  }

  async update(id: number, updatePersonalizationDto: UpdatePersonalizationDto) {
    const personalization = await this.personalizationRepository.findOneBy({id})
    if(!personalization){
      let errors: string[] = []
      errors.push("Personalization no encontrado")
      throw new NotFoundException(errors)
    }
    Object.assign(personalization,updatePersonalizationDto)
    await this.personalizationRepository.save(personalization)
    return {
      statusCode: 200,
      message: "ok"
    };
  }

  remove(id: number) {
    return `This action removes a #${id} personalization`;
  }
}
