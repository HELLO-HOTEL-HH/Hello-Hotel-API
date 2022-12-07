import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateHotelDto extends PartialType(CreateHotelDto) {
  @IsString()
  readonly hotelName: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly country: string;
}
