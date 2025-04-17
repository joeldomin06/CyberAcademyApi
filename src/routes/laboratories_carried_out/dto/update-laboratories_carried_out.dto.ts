import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratoriesCarriedOutDto } from './create-laboratories_carried_out.dto';
import { IsBoolean } from 'class-validator';

export class UpdateLaboratoriesCarriedOutDto extends PartialType(CreateLaboratoriesCarriedOutDto) {
    @IsBoolean({message: "isopended de debe ser un booleano"})
    isOpened: boolean
}
