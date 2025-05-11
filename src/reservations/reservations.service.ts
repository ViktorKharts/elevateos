import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationsService {
  private reservations = [
    {
      id: 1,
      userId: 123,
      startedAt: Date.now(),
      duration: 120,
      amenityName: 'Hello world',
    },
  ];

  findAll() {
    return this.reservations;
  }

  findOne(id: number) {
    return this.reservations.find((el) => el.id === id);
  }

  findOneByIdAndTimestamp(id: number, timestamp: string) {
    return this.reservations.find(
      (el) => el.id === id && el.startedAt === +timestamp,
    );
  }

  create(createReservationDto: any) {
    this.reservations.push(createReservationDto);
  }

  update(id: number, updateReservationDto: any) {
    const existingReservation = this.findOne(id);

    if (existingReservation) {
      // update reservation
    }
  }

  remove(id: number) {
    this.update(id, { isActive: false });
  }
}
