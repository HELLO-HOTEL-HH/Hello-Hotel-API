import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  readonly hotelName: string;

  @IsString()
  description: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly country: string;
}
