import { Test, TestingModule } from '@nestjs/testing';
import { AccesibilitiesController } from './accesibilities.controller';
import { AccesibilitiesService } from './accesibilities.service';

describe('AccesibilitiesController', () => {
  let controller: AccesibilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccesibilitiesController],
      providers: [AccesibilitiesService],
    }).compile();

    controller = module.get<AccesibilitiesController>(AccesibilitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
