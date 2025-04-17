import { Module } from '@nestjs/common';
import { MinigamesService } from './minigames.service';
import { MinigamesController } from './minigames.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Minigame } from './entities/minigame.entity';
import { Student } from '../students/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Minigame,Student])
  ],
  controllers: [MinigamesController],
  providers: [MinigamesService],
  exports: [MinigamesService]
})
export class MinigamesModule {}
