import { Test, TestingModule } from '@nestjs/testing';
import { TheoreticalQuestionnairesService } from './theoretical_questionnaires.service';

describe('TheoreticalQuestionnairesService', () => {
  let service: TheoreticalQuestionnairesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheoreticalQuestionnairesService],
    }).compile();

    service = module.get<TheoreticalQuestionnairesService>(TheoreticalQuestionnairesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
