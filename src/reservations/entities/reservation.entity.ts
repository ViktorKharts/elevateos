import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  amenityId: number;

  @Column()
  startedAt: number;

  @Column()
  duration: number;

  @Column()
  isActive: boolean;
}
