import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentsTypeDto } from './create-components_type.dto';

export class UpdateComponentsTypeDto extends PartialType(
  CreateComponentsTypeDto,
) {}
