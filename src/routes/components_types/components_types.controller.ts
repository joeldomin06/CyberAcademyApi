import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComponentsTypesService } from './components_types.service';
import { CreateComponentsTypeDto } from './dto/create-components_type.dto';
import { UpdateComponentsTypeDto } from './dto/update-components_type.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('components-types')
export class ComponentsTypesController {
  constructor(
    private readonly componentsTypesService: ComponentsTypesService,
  ) {}

  @Post()
  create(@Body() createComponentsTypeDto: CreateComponentsTypeDto) {
    return this.componentsTypesService.create(createComponentsTypeDto);
  }

  @Get()
  findAll() {
    return this.componentsTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',IdValidationPipe) id: string) {
    return this.componentsTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id',IdValidationPipe) id: string,
    @Body() updateComponentsTypeDto: UpdateComponentsTypeDto,
  ) {
    return this.componentsTypesService.update(+id, updateComponentsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id',IdValidationPipe) id: string) {
    return this.componentsTypesService.remove(+id);
  }
}
