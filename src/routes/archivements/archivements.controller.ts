import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArchivementsService } from './archivements.service';
import { CreateArchivementDto } from './dto/create-archivement.dto';
import { UpdateArchivementDto } from './dto/update-archivement.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('archivements')
export class ArchivementsController {
  constructor(private readonly archivementsService: ArchivementsService) {}

  @Post()
  create(@Body() createArchivementDto: CreateArchivementDto) {
    return this.archivementsService.create(createArchivementDto);
  }

  @Get()
  findAll() {
    return this.archivementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.archivementsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id',IdValidationPipe) id: string,
    @Body() updateArchivementDto: UpdateArchivementDto,
  ) {
    await this.archivementsService.update(+id, updateArchivementDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.archivementsService.remove(+id);
  }
}
