import { Module } from '@nestjs/common';
import { StoreSummariesService } from './store_summaries.service';
import { StoreSummariesController } from './store_summaries.controller';

@Module({
  controllers: [StoreSummariesController],
  providers: [StoreSummariesService],
})
export class StoreSummariesModule {}
