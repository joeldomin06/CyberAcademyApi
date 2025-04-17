import { Test, TestingModule } from '@nestjs/testing';
import { ArchivementsTypeService } from './archivements_type.service';

describe('ArchivementsTypeService', () => {
  let service: ArchivementsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchivementsTypeService],
    }).compile();

    service = module.get<ArchivementsTypeService>(ArchivementsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
