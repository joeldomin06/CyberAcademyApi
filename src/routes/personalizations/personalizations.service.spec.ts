import { Test, TestingModule } from '@nestjs/testing';
import { PersonalizationsService } from './personalizations.service';

describe('PersonalizationsService', () => {
  let service: PersonalizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalizationsService],
    }).compile();

    service = module.get<PersonalizationsService>(PersonalizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
