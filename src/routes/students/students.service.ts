import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterStudentDto } from './dto/register-student.dto';
import { FindManyOptions, Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { checkPassword, hashPassword } from 'src/utils/auth';
import { LoginStudentDto } from './dto/login-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccesibilitiesService } from '../accesibilities/accesibilities.service';
import { PersonalizationsService } from '../personalizations/personalizations.service';
import { MinigamesService } from '../minigames/minigames.service';
import { TheoreticalQuestionnairesService } from '../theoretical_questionnaires/theoretical_questionnaires.service';
import { LaboratoriesCarriedOutService } from '../laboratories_carried_out/laboratories_carried_out.service';
import { ArchivementsService } from '../archivements/archivements.service';

@Injectable()
export class StudentsService {
  constructor(
    private readonly minigameService: MinigamesService,
    private readonly archivementService: ArchivementsService,
    private readonly accesibilityService: AccesibilitiesService,
    private readonly personalizationService: PersonalizationsService,
    private readonly tqService: TheoreticalQuestionnairesService,
    private readonly lcoService: LaboratoriesCarriedOutService,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  //Gets
  async findAcessibility(id: number) {
    const student = await this.studentRepository.findOne(
      {
        where: {id},
        relations: ["accesibility"]
      }
    )
    if(!student || !student.accesibility) throw new NotFoundException('Accesibility no ha sido encontrado');
    return student.accesibility;
  }

  async findPersonalization(id: number) {
    const student = await this.studentRepository.findOne(
      {
        where: {id},
        relations: ["personalization","personalization.components"]
      }
    )
    if(!student || !student.personalization) throw new NotFoundException('personalization no ha sido encontrado');
    const personalization = student.personalization

    const mappedComponents = personalization.components.map((component) => ({
      id: component.id,
      isUnlocked: component.isUnlocked,
      personalizationId: component.personalizationId,
      type: component.componentType.category,
      chibicoins: component.componentType.chibicoins
    }));

    const response = {
      ...personalization,
      components: mappedComponents
    }
    return response;
  }

  async findMinigame(id: number) {
    const student = await this.studentRepository.findOne(
      {
        where: {id},
        relations: ["minigame"]
      }
    )
    if(!student || !student.minigame) throw new NotFoundException('minigame no ha sido encontrado');
    return student.minigame;
  }

  async findAllArchivement(id: number) {
    const student = await this.studentRepository.findOne(
      {
        where: {id},
        relations: ["archivements"]
      }
    )
    if(!student || !student.archivements) throw new NotFoundException('archivements no ha sido encontrado');
    return student.archivements;
  }

  async findAllTQ(id: number) {
    const student = await this.studentRepository.findOne(
      {
        where: {id},
        relations: ["tq"]
      }
    )
    if(!student || !student.tq) throw new NotFoundException('tq no ha sido encontrado');
    return student.tq;
  }

  async findAllLCO(id: number) {
    const student = await this.studentRepository.findOne(
      {
        where: {id},
        relations: ["lco"]
      }
    )
    if(!student || !student.lco) throw new NotFoundException('lco no ha sido encontrado');
    return student.lco;
  }

  //student functions

  async register(registerStudentDto: RegisterStudentDto) {
    const { nickname, password } = registerStudentDto;
    const studentExist = await this.studentRepository.findOneBy({ nickname });
    if (studentExist) throw new ConflictException('El nickname ya ha sido utilizado');
    //crear el usuario
    const student = this.studentRepository.create(registerStudentDto);
    student.password = await hashPassword(password);
    const studentSaved = await this.studentRepository.save(student)
    //crear las componentes
    const accesibility = await this.accesibilityService.create({studentId: studentSaved.id})
    const personalization = await this.personalizationService.create({studentId: studentSaved.id})
    const minigame = await this.minigameService.create({studentId: studentSaved.id})
    const tq = await this.tqService.createMany(studentSaved,["Phishing","DDoS","Worm"])
    const lco = await this.lcoService.createMany(studentSaved,["Phishing","DDoS","Worm"])
    const archivements = await this.archivementService.createMany(studentSaved)
    //asigna las componentes
    studentSaved.accesibility = accesibility;
    studentSaved.personalization = personalization;
    studentSaved.minigame = minigame;
    studentSaved.tq = tq;
    studentSaved.lco = lco;
    studentSaved.archivements = archivements;
    //guarda el usuario
    await this.studentRepository.save(studentSaved)
    //console.log(studentSaved)
    console.log(`se ha creado el estudiante ${studentSaved.nickname} en el tiempo: ${Date.now()}`);
    return {
      statusCode: 201,
      message: "ok"
    };
  }



  async login(loginStudentDto: LoginStudentDto) {
    const { nickname, password } = loginStudentDto;
    const student = await this.studentRepository.findOneBy({ nickname });
    if (!student)
      throw new NotFoundException('El estudiante no ha sido encontrado');
    if (!student.isAvailable)
      throw new ForbiddenException('La cuenta no esta disponible');
    const checkPass = await checkPassword(password, student.password);
    if (!checkPass)
      throw new UnauthorizedException('La contraseña no es correcta');
    return {
      id: student.id,
      level: student.level
    };
  }

  async findAll() {
    const options: FindManyOptions<Student> = {
      select: ['nickname', 'isAvailable'],
    };
    return await this.studentRepository.find(options);
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student)
      throw new NotFoundException('El estudiante no ha sido encontrado');
    return student;
  }

  async remove(id: number, full?: string) {
    const student = await this.findOne(id);
    if (full === 'true') {
      await this.studentRepository.remove(student);
      return 'Estudiante eliminado completamente';
    }
    student.isAvailable = false;
    await this.studentRepository.save(student);
    return 'Estudiante eliminado logicamente';
  }
}
