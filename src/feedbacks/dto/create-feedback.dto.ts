import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateFeedbackDetailDto {
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class CreateFeedbackDto {
  @IsNumber()
  order_id: number;

  @IsNumber()
  store_id: number;

  @ValidateNested()
  @Type(() => CreateFeedbackDetailDto)
  @IsOptional()
  order_feedback?: CreateFeedbackDetailDto;

  @ValidateNested()
  @Type(() => CreateFeedbackDetailDto)
  @IsOptional()
  delivery_feedback?: CreateFeedbackDetailDto;
}
