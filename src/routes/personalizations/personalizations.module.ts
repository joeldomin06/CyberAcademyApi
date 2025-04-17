import { Module } from '@nestjs/common';
import { PersonalizationsService } from './personalizations.service';
import { PersonalizationsController } from './personalizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentsModule } from '../components/components.module';
import { Personalization } from './entities/personalization.entity';
import { Student } from '../students/entities/student.entity';
import { ComponentsType } from '../components_types/entities/components_type.entity';
import { Component } from '../components/entities/component.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Personalization,Student,ComponentsType,Component]),
    ComponentsModule
  ],
  controllers: [PersonalizationsController],
  providers: [PersonalizationsService],
  exports: [PersonalizationsService]
})
export class PersonalizationsModule {}
