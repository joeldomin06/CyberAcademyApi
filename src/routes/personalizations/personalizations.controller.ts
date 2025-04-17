import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonalizationsService } from './personalizations.service';
import { CreatePersonalizationDto } from './dto/create-personalization.dto';
import { UpdatePersonalizationDto } from './dto/update-personalization.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('personalizations')
export class PersonalizationsController {
  constructor(
    private readonly personalizationsService: PersonalizationsService,
  ) {}

  @Post()
  create(@Body() createPersonalizationDto: CreatePersonalizationDto) {
    return this.personalizationsService.create(createPersonalizationDto);
  }

  @Get()
  findAll() {
    return this.personalizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.personalizationsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id',IdValidationPipe) id: string,
    @Body() updatePersonalizationDto: UpdatePersonalizationDto,
  ) {
    await this.personalizationsService.update(+id, updatePersonalizationDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.personalizationsService.remove(+id);
  }
}
