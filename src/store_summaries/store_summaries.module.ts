import { Module } from '@nestjs/common';
import { StoreSummariesService } from './store_summaries.service';
import { StoreSummariesController } from './store_summaries.controller';
import { StoreSummary } from './entities/store_summary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StoreSummary])],

  controllers: [StoreSummariesController],
  providers: [StoreSummariesService],
})
export class StoreSummariesModule {}
