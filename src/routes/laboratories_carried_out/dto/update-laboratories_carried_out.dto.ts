import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratoriesCarriedOutDto } from './create-laboratories_carried_out.dto';

export class UpdateLaboratoriesCarriedOutDto extends PartialType(CreateLaboratoriesCarriedOutDto) {
    isOpened: boolean
}
