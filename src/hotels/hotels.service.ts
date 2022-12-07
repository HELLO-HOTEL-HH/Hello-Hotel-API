import { Inject, Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
    return this.hotelRepository.save(createHotelDto);
  }

  findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  findOne(id: number) {
    return this.hotelRepository.findOneById(id);
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
