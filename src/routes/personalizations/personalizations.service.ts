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
  const { studentId } = createPersonalizationDto;

  const student = await this.studentRepository.findOneBy({ id: studentId });
  if (!student) {
    throw new NotFoundException(['Estudiante no encontrado']);
  }

  // Creamos la Personalization vacía primero
  const personalization = this.personalizationRepository.create({ student });
  const personalizationSaved = await this.personalizationRepository.save(personalization);

  // Asegúrate de que createMany NO sea async o usa await
  const components_types = await this.componentTypeRepository.find();
  const components = this.componentService.createMany(components_types); // debe devolver Component[]

  const unlockeds = [0, 5, 10, 15, 20, 25, 28, 32, 36];
  for (let i = 0; i < components.length; i++) {
    components[i].isUnlocked = unlockeds.includes(i);
    components[i].personalization = personalizationSaved;
  }

  await this.componentRepository.save(components); // Guarda todos los componentes con relación

  // Opcional: retornar personalization con componentes (ya guardados)
  return personalizationSaved;
}

  async findAll() {
    return `This action returns all personalizations`;
  }

  async findOne(id: number) {
    return await this.personalizationRepository.findOne({
      where: {id},
      relations: ["components"]
    });
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
