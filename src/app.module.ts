import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './routes/students/students.module';
import { PersonalizationsModule } from './routes/personalizations/personalizations.module';
import { ComponentsModule } from './routes/components/components.module';
import { MinigamesModule } from './routes/minigames/minigames.module';
import { AccesibilitiesModule } from './routes/accesibilities/accesibilities.module';
import { ArchivementsModule } from './routes/archivements/archivements.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ComponentsTypesModule } from './routes/components_types/components_types.module';
import { ArchivementsTypeModule } from './routes/archivements_type/archivements_type.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { TheoreticalQuestionnairesModule } from './routes/theoretical_questionnaires/theoretical_questionnaires.module';
import { LaboratoriesCarriedOutModule } from './routes/laboratories_carried_out/laboratories_carried_out.module';
import { InstancesModule } from './routes/instances/instances.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    ThrottlerModule.forRoot({
      throttlers: [{
          ttl: 60,
          limit: 100
      }]
    }),
    StudentsModule,
    PersonalizationsModule,
    ComponentsModule,
    MinigamesModule,
    AccesibilitiesModule,
    ArchivementsModule,
    ComponentsTypesModule,
    ArchivementsTypeModule,
    TheoreticalQuestionnairesModule,
    LaboratoriesCarriedOutModule,
    InstancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
