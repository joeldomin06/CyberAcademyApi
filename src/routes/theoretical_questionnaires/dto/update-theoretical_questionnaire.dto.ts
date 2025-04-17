import { PartialType } from '@nestjs/mapped-types';
import { CreateTheoreticalQuestionnaireDto } from './create-theoretical_questionnaire.dto';

export class UpdateTheoreticalQuestionnaireDto extends PartialType(CreateTheoreticalQuestionnaireDto) {
    isDone: boolean
}
