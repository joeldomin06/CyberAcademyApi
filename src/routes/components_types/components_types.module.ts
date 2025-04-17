import { Module } from '@nestjs/common';
import { ComponentsTypesService } from './components_types.service';
import { ComponentsTypesController } from './components_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentsType } from './entities/components_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComponentsType])],
  controllers: [ComponentsTypesController],
  providers: [ComponentsTypesService],
  exports: [ComponentsTypesService]
})
export class ComponentsTypesModule {}
