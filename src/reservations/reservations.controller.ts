import { Controller, Get, Query } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Get('/all')
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get()
  findByAmenityId(@Query() reservationQuery: any) {
    const { amenityId, timestamp } = reservationQuery;

    return this.reservationsService.findOneByIdAndTimestamp(
      amenityId,
      timestamp,
    );
  }
}
