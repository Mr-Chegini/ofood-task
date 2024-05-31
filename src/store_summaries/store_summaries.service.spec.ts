import { Test, TestingModule } from '@nestjs/testing';
import { StoreSummariesService } from './store_summaries.service';

describe('StoreSummariesService', () => {
  let service: StoreSummariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreSummariesService],
    }).compile();

    service = module.get<StoreSummariesService>(StoreSummariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
