import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { Amenity } from './entities/amenity';
import { UpdateAmenityDto } from './dto/update-amenity.dto';

@Injectable()
export class AmenitiesService {
  private amenities: Amenity[] = [
    {
      id: 1,
      name: 'Hello world',
      isActive: true,
    },
  ];

  findOneById(id: number) {
    const amenity = this.amenities.find((el) => el.id === id);

    if (!amenity) {
      throw new NotFoundException(`No #${id} amenity was found.`);
    }

    return amenity;
  }

  findOneByName(name: string) {
    const amenity = this.amenities.find((el) => el.name === name);

    if (!amenity) {
      throw new NotFoundException(`No ${name} amenity was found.`);
    }

    return amenity;
  }

  findAll() {
    return this.amenities;
  }

  create(body: CreateAmenityDto) {
    const amenity = {
      id: this.amenities.length + 1,
      ...body,
    };

    this.amenities.push(amenity);

    return this.amenities.at(-1);
  }

  update(id: number, body: UpdateAmenityDto) {
    const amenity = this.findOneById(id);
    const index = this.amenities.indexOf(amenity);

    this.amenities[index] = {
      ...amenity,
      ...body,
    };

    return this.amenities;
  }

  remove(id: number) {
    return this.update(id, { isActive: false });
  }
}
