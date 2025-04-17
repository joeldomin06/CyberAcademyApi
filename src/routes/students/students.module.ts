import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { AccesibilitiesModule } from '../accesibilities/accesibilities.module';
import { ArchivementsModule } from '../archivements/archivements.module';
import { LaboratoriesCarriedOutModule } from '../laboratories_carried_out/laboratories_carried_out.module';
import { MinigamesModule } from '../minigames/minigames.module';
import { PersonalizationsModule } from '../personalizations/personalizations.module';
import { TheoreticalQuestionnairesModule } from '../theoretical_questionnaires/theoretical_questionnaires.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    AccesibilitiesModule,
    PersonalizationsModule,
    MinigamesModule,
    TheoreticalQuestionnairesModule,
    LaboratoriesCarriedOutModule,
    ArchivementsModule
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
