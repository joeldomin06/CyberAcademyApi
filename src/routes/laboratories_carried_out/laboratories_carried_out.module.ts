import { Module } from '@nestjs/common';
import { LaboratoriesCarriedOutService } from './laboratories_carried_out.service';
import { LaboratoriesCarriedOutController } from './laboratories_carried_out.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoriesCarriedOut } from './entities/laboratories_carried_out.entity';
import { Student } from '../students/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LaboratoriesCarriedOut, Student])],
  controllers: [LaboratoriesCarriedOutController],
  providers: [LaboratoriesCarriedOutService],
  exports:[LaboratoriesCarriedOutService]
})
export class LaboratoriesCarriedOutModule {}
