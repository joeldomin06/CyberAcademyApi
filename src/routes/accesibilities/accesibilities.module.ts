import { Module } from '@nestjs/common';
import { AccesibilitiesService } from './accesibilities.service';
import { AccesibilitiesController } from './accesibilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesibility } from './entities/accesibility.entity';
import { Student } from '../students/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Accesibility,Student]),
  ],
  controllers: [AccesibilitiesController],
  providers: [AccesibilitiesService],
  exports: [AccesibilitiesService]
})
export class AccesibilitiesModule {}
