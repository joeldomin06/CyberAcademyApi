import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsTypesController } from './components_types.controller';
import { ComponentsTypesService } from './components_types.service';

describe('ComponentsTypesController', () => {
  let controller: ComponentsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentsTypesController],
      providers: [ComponentsTypesService],
    }).compile();

    controller = module.get<ComponentsTypesController>(
      ComponentsTypesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
