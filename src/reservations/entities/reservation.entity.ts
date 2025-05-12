// import { Amenity } from 'src/amenities/entities/amenity.entity';
// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  // @ManyToOne(() => Amenity, (amenity) => amenity.reservations)
  // amenity: Amenity;

  @Column()
  amenityId: number;

  @Column()
  startedAt: number;

  @Column()
  duration: number;

  @Column()
  isActive: boolean;
}
