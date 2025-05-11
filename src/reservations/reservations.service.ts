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
      startedAt: 1746973010554,
      duration: 120,
      isActive: true,
    },
  ];

  findAll() {
    return this.reservations;
  }

  findOneById(id: number) {
    const reservation = this.reservations.find((el) => el.id === id);

    if (!reservation) {
      throw new NotFoundException(`Reservation #${id} not found.`);
    }

    return reservation;
  }

  findOneByIdAndTimestamp(id: number, timestamp: number) {
    const reservation = this.reservations.find(
      (el) => el.id === id && el.startedAt === timestamp,
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
      id: this.reservations.length + 1,
      ...createReservationDto,
    });

    return this.reservations.at(-1);
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    const existingReservation = this.findOneById(id);
    const index = this.reservations.indexOf(existingReservation);

    this.reservations[index] = {
      ...existingReservation,
      ...updateReservationDto,
    };

    return this.reservations[index];
  }

  remove(id: number) {
    return this.update(id, { isActive: false });
  }
}
