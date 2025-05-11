import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationQuery } from './entities/reservation.query';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Get('/all')
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get()
  findByAmenityIdAndTimestamp(@Query() reservationQuery: ReservationQuery) {
    const { amenityId, timestamp } = reservationQuery;

    return this.reservationsService.findOneByAmenityIdAndTimestamp(
      amenityId,
      timestamp,
    );
  }

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.reservationsService.remove(id);
  }
}
