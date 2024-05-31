import { Test, TestingModule } from '@nestjs/testing';
import { StoreSummariesController } from './store_summaries.controller';
import { StoreSummariesService } from './store_summaries.service';

describe('StoreSummariesController', () => {
  let controller: StoreSummariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreSummariesController],
      providers: [StoreSummariesService],
    }).compile();

    controller = module.get<StoreSummariesController>(StoreSummariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
