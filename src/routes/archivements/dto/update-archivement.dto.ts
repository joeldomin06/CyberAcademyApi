import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivementDto } from './create-archivement.dto';
import { IsBoolean } from 'class-validator';

export class UpdateArchivementDto extends PartialType(CreateArchivementDto) {
    @IsBoolean({message: "debe ser un booleano"})
    isUnlocked: boolean
}
