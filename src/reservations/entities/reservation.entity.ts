import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'amenity_id' })
  amenityId: number;

  @Column({ name: 'start_time' })
  startsAt: number;

  @Column({ name: 'end_time' })
  endsAt: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ name: 'is_active' })
  isActive: boolean;
}
