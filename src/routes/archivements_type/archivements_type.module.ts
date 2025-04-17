import { Module } from '@nestjs/common';
import { ArchivementsTypeService } from './archivements_type.service';
import { ArchivementsTypeController } from './archivements_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivementsType } from './entities/archivements_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArchivementsType])
  ],
  controllers: [ArchivementsTypeController],
  providers: [ArchivementsTypeService],
  exports: [ArchivementsTypeService]
})
export class ArchivementsTypeModule {}
