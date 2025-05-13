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
import { AuthDecorator } from 'src/auth/authentication/decorators/auth.decorator';
import { AuthType } from 'src/auth/authentication/enums/auth-type.enum';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { ReservationWithAmenity } from './entities/reseravation-w-amenity';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @AuthDecorator(AuthType.NONE)
  @Get('/all')
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get()
  findByAmenityIdAndTimestamp(
    @Query() reservationQuery: ReservationQuery,
  ): Promise<ReservationWithAmenity> {
    const { amenityId, timestamp } = reservationQuery;

    return this.reservationsService.findOneByAmenityIdAndTimestamp(
      amenityId,
      timestamp,
    );
  }

  @AuthDecorator(AuthType.NONE)
  @Get('user/:userId')
  findAllByUserId(@Param('userId') userId: number) {
    return this.reservationsService.findAllByUserId(userId);
  }

  @Get('for-current-user')
  findForThisUser(@ActiveUser('sub') userId: number) {
    return this.reservationsService.findAllByUserId(userId);
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
