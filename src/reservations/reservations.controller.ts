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
import { ApiResponse } from '@nestjs/swagger';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @ApiResponse({ status: 200, description: 'Returns all stored reservations.' })
  @AuthDecorator(AuthType.NONE)
  @Get('/all')
  findAll() {
    return this.reservationsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description:
      'Returns reservations with the specified Amenity and starting time.',
  })
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

  @ApiResponse({
    status: 200,
    description:
      "Returns all the available reservations for the provided user. Doesn't require authentication.",
  })
  @AuthDecorator(AuthType.NONE)
  @Get('user/:userId')
  findAllByUserId(@Param('userId') userId: number) {
    return this.reservationsService.findAllByUserId(userId);
  }

  @ApiResponse({
    status: 200,
    description:
      'Returns all the available reservations for the currently authenticated user.',
  })
  @Get('for-current-user')
  findForThisUser(@ActiveUser('sub') userId: number) {
    return this.reservationsService.findAllByUserId(userId);
  }

  @ApiResponse({
    status: 201,
    description: 'Creates a new reservation.',
  })
  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Provides changes to an existing reservation.',
  })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Deletes an existing reservation.',
  })
  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.reservationsService.remove(id);
  }
}
