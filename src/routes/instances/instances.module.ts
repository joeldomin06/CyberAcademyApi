import { Module } from '@nestjs/common';
import { InstancesService } from './instances.service';
import { InstancesController } from './instances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../students/entities/student.entity';
import { Instance } from './entities/instance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student,Instance])],
  controllers: [InstancesController],
  providers: [InstancesService],
})
export class InstancesModule {}
