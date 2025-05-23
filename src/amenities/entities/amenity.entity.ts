import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Amenity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'is_active' })
  isActive: boolean;
}
