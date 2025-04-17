import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoriesCarriedOutController } from './laboratories_carried_out.controller';
import { LaboratoriesCarriedOutService } from './laboratories_carried_out.service';

describe('LaboratoriesCarriedOutController', () => {
  let controller: LaboratoriesCarriedOutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaboratoriesCarriedOutController],
      providers: [LaboratoriesCarriedOutService],
    }).compile();

    controller = module.get<LaboratoriesCarriedOutController>(LaboratoriesCarriedOutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
