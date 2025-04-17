import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsTypesService } from './components_types.service';

describe('ComponentsTypesService', () => {
  let service: ComponentsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentsTypesService],
    }).compile();

    service = module.get<ComponentsTypesService>(ComponentsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
