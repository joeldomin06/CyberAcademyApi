import { PartialType } from '@nestjs/mapped-types';
import { CreateTheoreticalQuestionnaireDto } from './create-theoretical_questionnaire.dto';
import { IsBoolean } from 'class-validator';

export class UpdateTheoreticalQuestionnaireDto extends PartialType(CreateTheoreticalQuestionnaireDto) {
    @IsBoolean({message: "isDone debe ser un booleano"})
    isDone: boolean
}
