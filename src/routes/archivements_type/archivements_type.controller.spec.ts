import { Test, TestingModule } from '@nestjs/testing';
import { ArchivementsTypeController } from './archivements_type.controller';
import { ArchivementsTypeService } from './archivements_type.service';

describe('ArchivementsTypeController', () => {
  let controller: ArchivementsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivementsTypeController],
      providers: [ArchivementsTypeService],
    }).compile();

    controller = module.get<ArchivementsTypeController>(ArchivementsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
