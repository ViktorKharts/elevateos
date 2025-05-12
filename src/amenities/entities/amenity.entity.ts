// import { Reservation } from 'src/reservations/entities/reservation.entity';
// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Amenity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @OneToMany(() => Reservation, (reservation) => reservation.amenity)
  // reservations: Reservation[];

  @Column()
  isActive: boolean;
}
