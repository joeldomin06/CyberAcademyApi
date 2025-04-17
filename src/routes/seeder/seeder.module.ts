import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../../config/typeorm.config';
import { ComponentsType } from '../components_types/entities/components_type.entity';
import { ArchivementsType } from '../archivements_type/entities/archivements_type.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
        useFactory: typeOrmConfig,
        inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([ComponentsType,ArchivementsType])
  ],
  providers: [SeederService]
})
export class SeederModule {}
