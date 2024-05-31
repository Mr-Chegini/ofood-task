import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreSummariesService } from './store_summaries.service';
import { CreateStoreSummaryDto } from './dto/create-store_summary.dto';
import { UpdateStoreSummaryDto } from './dto/update-store_summary.dto';

@Controller('store-summaries')
export class StoreSummariesController {
  constructor(private readonly storeSummariesService: StoreSummariesService) {}

  @Post()
  create(@Body() createStoreSummaryDto: CreateStoreSummaryDto) {
    return this.storeSummariesService.create(createStoreSummaryDto);
  }

  @Get()
  findAll() {
    return this.storeSummariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeSummariesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreSummaryDto: UpdateStoreSummaryDto) {
    return this.storeSummariesService.update(+id, updateStoreSummaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeSummariesService.remove(+id);
  }
}
