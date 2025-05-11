import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';

@Controller('amenities')
export class AmenitiesController {
  constructor(private amenitiesService: AmenitiesService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.amenitiesService.findOneById(id);
  }

  @Get()
  findAll() {
    return this.amenitiesService.findAll();
  }

  @Post()
  create(@Body() body: CreateAmenityDto) {
    return this.amenitiesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateAmenityDto) {
    return this.amenitiesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.amenitiesService.remove(id);
  }
}
