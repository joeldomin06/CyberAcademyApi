import { Test, TestingModule } from '@nestjs/testing';
import { PersonalizationsController } from './personalizations.controller';
import { PersonalizationsService } from './personalizations.service';

describe('PersonalizationsController', () => {
  let controller: PersonalizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalizationsController],
      providers: [PersonalizationsService],
    }).compile();

    controller = module.get<PersonalizationsController>(
      PersonalizationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
