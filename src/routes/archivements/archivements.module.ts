import { Module } from '@nestjs/common';
import { ArchivementsService } from './archivements.service';
import { ArchivementsController } from './archivements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archivement } from './entities/archivement.entity';
import { Student } from '../students/entities/student.entity';
import { ArchivementsType } from '../archivements_type/entities/archivements_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Archivement,Student,ArchivementsType]),
  ],
  controllers: [ArchivementsController],
  providers: [ArchivementsService],
  exports: [ArchivementsService]
})
export class ArchivementsModule {}
