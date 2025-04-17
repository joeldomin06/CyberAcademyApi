import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccesibilitiesService } from './accesibilities.service';
import { CreateAccesibilityDto } from './dto/create-accesibility.dto';
import { UpdateAccesibilityDto } from './dto/update-accesibility.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('accesibilities')
export class AccesibilitiesController {
  constructor(private readonly accesibilitiesService: AccesibilitiesService) {}

  @Post()
  create(@Body() createAccesibilityDto: CreateAccesibilityDto) {
    return this.accesibilitiesService.create(createAccesibilityDto);
  }

  @Get()
  findAll() {
    return this.accesibilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: number) {
    return this.accesibilitiesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id',IdValidationPipe) id: string,
    @Body() updateAccesibilityDto: UpdateAccesibilityDto,
  ) {
    await this.accesibilitiesService.update(+id, updateAccesibilityDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.accesibilitiesService.remove(+id);
  }
}
