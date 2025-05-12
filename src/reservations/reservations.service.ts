import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { amenityIdAndTimestampQuery } from './sql/find-by-amenity-and-timestmap';
import { ReservationWithAmenity } from './entities/reseravation-w-amenity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll() {
    return await this.reservationRepository.find();
  }

  async findOneById(id: number) {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
    });

    if (!reservation) {
      throw new NotFoundException(`Reservation #${id} not found.`);
    }

    return reservation;
  }

  async findOneByAmenityIdAndTimestamp(amenityId: string, timestamp: string) {
    const reservation =
      await this.dataSource.manager.query<ReservationWithAmenity>(
        amenityIdAndTimestampQuery(+amenityId, +timestamp),
      );

    if (!reservation) {
      throw new NotFoundException(
        `Reservation #${amenityId} and timestamp ${timestamp} not found.`,
      );
    }

    return reservation;
  }

  async create(createReservationDto: CreateReservationDto) {
    const reservation = this.reservationRepository.create(createReservationDto);
    await this.reservationRepository.save(reservation);

    return reservation;
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.reservationRepository.preload({
      id,
      ...updateReservationDto,
    });

    if (!reservation) {
      throw new NotFoundException(`Reservation #${id} not found.`);
    }

    return reservation;
  }

  remove(id: number) {
    return this.update(id, { isActive: false });
  }
}
