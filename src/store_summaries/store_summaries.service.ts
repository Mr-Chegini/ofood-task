import { Injectable } from '@nestjs/common';
import { CreateStoreSummaryDto } from './dto/create-store_summary.dto';
import { UpdateStoreSummaryDto } from './dto/update-store_summary.dto';

@Injectable()
export class StoreSummariesService {
  create(createStoreSummaryDto: CreateStoreSummaryDto) {
    return 'This action adds a new storeSummary';
  }

  findAll() {
    return `This action returns all storeSummaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeSummary`;
  }

  update(id: number, updateStoreSummaryDto: UpdateStoreSummaryDto) {
    return `This action updates a #${id} storeSummary`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeSummary`;
  }
}
