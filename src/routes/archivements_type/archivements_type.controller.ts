import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArchivementsTypeService } from './archivements_type.service';
import { CreateArchivementsTypeDto } from './dto/create-archivements_type.dto';
import { UpdateArchivementsTypeDto } from './dto/update-archivements_type.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('archivements-type')
export class ArchivementsTypeController {
  constructor(private readonly archivementsTypeService: ArchivementsTypeService) {}

  @Post()
  create(@Body() createArchivementsTypeDto: CreateArchivementsTypeDto) {
    return this.archivementsTypeService.create(createArchivementsTypeDto);
  }

  @Get()
  findAll() {
    return this.archivementsTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.archivementsTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',IdValidationPipe) id: string, @Body() updateArchivementsTypeDto: UpdateArchivementsTypeDto) {
    return this.archivementsTypeService.update(+id, updateArchivementsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.archivementsTypeService.remove(+id);
  }
}
