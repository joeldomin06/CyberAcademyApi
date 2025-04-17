import { Test, TestingModule } from '@nestjs/testing';
import { TheoreticalQuestionnairesController } from './theoretical_questionnaires.controller';
import { TheoreticalQuestionnairesService } from './theoretical_questionnaires.service';

describe('TheoreticalQuestionnairesController', () => {
  let controller: TheoreticalQuestionnairesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheoreticalQuestionnairesController],
      providers: [TheoreticalQuestionnairesService],
    }).compile();

    controller = module.get<TheoreticalQuestionnairesController>(TheoreticalQuestionnairesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
