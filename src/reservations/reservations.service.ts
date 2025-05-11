import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  private reservations: Reservation[] = [
    {
      id: 1,
      userId: 123,
      amenityId: 123,
      startedAt: Date.now(),
      duration: 120,
      isActive: true,
    },
  ];

  findAll() {
    return this.reservations;
  }

  findOneById(id: string) {
    const reservation = this.reservations.find((el) => el.id === +id);

    if (!reservation) {
      throw new NotFoundException(`Reservation #${id} not found.`);
    }

    return reservation;
  }

  findOneByIdAndTimestamp(id: string, timestamp: string) {
    const reservation = this.reservations.find(
      (el) => el.id === +id && el.startedAt === +timestamp,
    );

    if (!reservation) {
      throw new NotFoundException(
        `Reservation #${id} and timestamp ${timestamp} not found.`,
      );
    }

    return reservation;
  }

  create(createReservationDto: CreateReservationDto) {
    this.reservations.push({
      id: this.reservations.length,
      ...createReservationDto,
    });
  }

  update(id: string, updateReservationDto: UpdateReservationDto) {
    const existingReservation = this.findOneById(id);
    const index = this.reservations.indexOf(existingReservation);

    this.reservations[index] = {
      ...existingReservation,
      ...updateReservationDto,
    };

    return this.reservations[index];
  }

  remove(id: string) {
    return this.update(id, { isActive: false });
  }
}
