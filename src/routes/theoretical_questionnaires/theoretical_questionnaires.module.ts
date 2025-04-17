import { Module } from '@nestjs/common';
import { TheoreticalQuestionnairesService } from './theoretical_questionnaires.service';
import { TheoreticalQuestionnairesController } from './theoretical_questionnaires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheoreticalQuestionnaire } from './entities/theoretical_questionnaire.entity';
import { Student } from '../students/entities/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TheoreticalQuestionnaire,Student])],
  controllers: [TheoreticalQuestionnairesController],
  providers: [TheoreticalQuestionnairesService],
  exports:[TheoreticalQuestionnairesService]
})
export class TheoreticalQuestionnairesModule {}
