import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaboratoriesCarriedOutService } from './laboratories_carried_out.service';
import { CreateLaboratoriesCarriedOutDto } from './dto/create-laboratories_carried_out.dto';
import { UpdateLaboratoriesCarriedOutDto } from './dto/update-laboratories_carried_out.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('laboratories-carried-out')
export class LaboratoriesCarriedOutController {
  constructor(private readonly laboratoriesCarriedOutService: LaboratoriesCarriedOutService) {}

  @Post()
  create(@Body() createLaboratoriesCarriedOutDto: CreateLaboratoriesCarriedOutDto) {
    return this.laboratoriesCarriedOutService.create(createLaboratoriesCarriedOutDto);
  }

  @Get()
  findAll() {
    return this.laboratoriesCarriedOutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.laboratoriesCarriedOutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',IdValidationPipe) id: string, @Body() updateLaboratoriesCarriedOutDto: UpdateLaboratoriesCarriedOutDto) {
    return this.laboratoriesCarriedOutService.update(+id, updateLaboratoriesCarriedOutDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.laboratoriesCarriedOutService.remove(+id);
  }
}
