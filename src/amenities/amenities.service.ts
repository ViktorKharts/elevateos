import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Amenity } from './entities/amenity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenity)
    private readonly amenityRepository: Repository<Amenity>,
  ) {}

  async findAll() {
    return await this.amenityRepository.find();
  }

  async findOneById(id: number) {
    const amenity = await this.amenityRepository.findOne({
      where: { id },
    });

    if (!amenity) {
      throw new NotFoundException(`No #${id} amenity was found.`);
    }

    return amenity;
  }

  async findOneByName(name: string) {
    const amenity = await this.amenityRepository.findOne({ where: { name } });

    if (!amenity) {
      throw new NotFoundException(`No ${name} amenity was found.`);
    }

    return amenity;
  }

  async create(createAmenityDto: CreateAmenityDto) {
    const amenity = this.amenityRepository.create(createAmenityDto);
    await this.amenityRepository.save(amenity);

    return amenity;
  }

  async update(id: number, updateAmenityDto: UpdateAmenityDto) {
    const amenity = await this.amenityRepository.preload({
      id,
      ...updateAmenityDto,
    });

    if (!amenity) {
      throw new NotFoundException(`No #${id} amenity was found.`);
    }

    await this.amenityRepository.save(amenity);

    return amenity;
  }

  remove(id: number) {
    return this.update(id, { isActive: false });
  }
}
