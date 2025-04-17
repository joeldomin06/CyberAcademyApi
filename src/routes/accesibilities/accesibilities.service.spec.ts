import { Test, TestingModule } from '@nestjs/testing';
import { AccesibilitiesService } from './accesibilities.service';

describe('AccesibilitiesService', () => {
  let service: AccesibilitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesibilitiesService],
    }).compile();

    service = module.get<AccesibilitiesService>(AccesibilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
