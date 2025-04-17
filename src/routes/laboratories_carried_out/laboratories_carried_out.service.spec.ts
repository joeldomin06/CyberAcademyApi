import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoriesCarriedOutService } from './laboratories_carried_out.service';

describe('LaboratoriesCarriedOutService', () => {
  let service: LaboratoriesCarriedOutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratoriesCarriedOutService],
    }).compile();

    service = module.get<LaboratoriesCarriedOutService>(LaboratoriesCarriedOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
