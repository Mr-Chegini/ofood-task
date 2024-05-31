import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreSummaryDto } from './create-store_summary.dto';

export class UpdateStoreSummaryDto extends PartialType(CreateStoreSummaryDto) {}
