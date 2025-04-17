import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Component } from './entities/component.entity';
import { ComponentsType } from '../components_types/entities/components_type.entity';
import { Personalization } from '../personalizations/entities/personalization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Component,ComponentsType,Personalization]),
  ],
  controllers: [ComponentsController],
  providers: [ComponentsService],
  exports: [ComponentsService]
})
export class ComponentsModule {}
