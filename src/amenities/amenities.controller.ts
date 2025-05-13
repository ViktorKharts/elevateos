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
import { AuthDecorator } from 'src/auth/authentication/decorators/auth.decorator';
import { AuthType } from 'src/auth/authentication/enums/auth-type.enum';
import { ApiResponse } from '@nestjs/swagger';

@Controller('amenities')
export class AmenitiesController {
  constructor(private amenitiesService: AmenitiesService) {}

  @ApiResponse({
    status: 200,
    description: 'Returns specific Amenity. Does not require authentication.',
  })
  @AuthDecorator(AuthType.NONE)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.amenitiesService.findOneById(id);
  }

  @ApiResponse({
    status: 200,
    description:
      'Returns all available Amenities. Does not require authentication.',
  })
  @AuthDecorator(AuthType.NONE)
  @Get()
  findAll() {
    return this.amenitiesService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Create a new Amenity.' })
  @Post()
  create(@Body() body: CreateAmenityDto) {
    return this.amenitiesService.create(body);
  }

  @ApiResponse({ status: 200, description: 'Edits an existing Amenity.' })
  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateAmenityDto) {
    return this.amenitiesService.update(id, body);
  }

  @ApiResponse({ status: 201, description: 'Removes an existing Amenity.' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.amenitiesService.remove(id);
  }
}
