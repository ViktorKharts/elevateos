import { ApiProperty } from '@nestjs/swagger';

export class ReservationWithAmenity {
  @ApiProperty({ description: 'Reservation id.' })
  id: number;

  @ApiProperty({ description: 'Reservation owner id.' })
  userId: number;

  @ApiProperty({ description: 'Amenity name.' })
  name: string;

  @ApiProperty({ description: 'Time reservation is booked for.' })
  startedAt: number;

  @ApiProperty({ description: 'Reservation duration.' })
  duration: number;
}
