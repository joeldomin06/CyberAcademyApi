import { Test, TestingModule } from '@nestjs/testing';
import { ArchivementsController } from './archivements.controller';
import { ArchivementsService } from './archivements.service';

describe('ArchivementsController', () => {
  let controller: ArchivementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivementsController],
      providers: [ArchivementsService],
    }).compile();

    controller = module.get<ArchivementsController>(ArchivementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
