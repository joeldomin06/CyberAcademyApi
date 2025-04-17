import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheoreticalQuestionnairesService } from './theoretical_questionnaires.service';
import { CreateTheoreticalQuestionnaireDto } from './dto/create-theoretical_questionnaire.dto';
import { UpdateTheoreticalQuestionnaireDto } from './dto/update-theoretical_questionnaire.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('theoretical-questionnaires')
export class TheoreticalQuestionnairesController {
  constructor(private readonly theoreticalQuestionnairesService: TheoreticalQuestionnairesService) {}

  @Post()
  create(@Body() createTheoreticalQuestionnaireDto: CreateTheoreticalQuestionnaireDto) {
    return this.theoreticalQuestionnairesService.create(createTheoreticalQuestionnaireDto);
  }

  @Get()
  findAll() {
    return this.theoreticalQuestionnairesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.theoreticalQuestionnairesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',IdValidationPipe) id: string, @Body() updateTheoreticalQuestionnaireDto: UpdateTheoreticalQuestionnaireDto) {
    return this.theoreticalQuestionnairesService.update(+id, updateTheoreticalQuestionnaireDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.theoreticalQuestionnairesService.remove(+id);
  }
}
