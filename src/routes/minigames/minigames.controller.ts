import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MinigamesService } from './minigames.service';
import { CreateMinigameDto } from './dto/create-minigame.dto';
import { UpdateMinigameDto } from './dto/update-minigame.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('minigames')
export class MinigamesController {
  constructor(private readonly minigamesService: MinigamesService) {}

  @Post()
  create(@Body() createMinigameDto: CreateMinigameDto) {
    return this.minigamesService.create(createMinigameDto);
  }

  @Get()
  findAll() {
    return this.minigamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.minigamesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id',IdValidationPipe) id: string,
    @Body() updateMinigameDto: UpdateMinigameDto,
  ) {
    return this.minigamesService.update(+id, updateMinigameDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.minigamesService.remove(+id);
  }
}
