import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivementsTypeDto } from './create-archivements_type.dto';

export class UpdateArchivementsTypeDto extends PartialType(CreateArchivementsTypeDto) {}
