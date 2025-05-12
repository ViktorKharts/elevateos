import { IsBoolean, IsString } from 'class-validator';
// import { Reservation } from 'src/reservations/entities/reservation.entity';

export class CreateAmenityDto {
  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;

  // @IsString({ each: true })
  // reservations: Reservation[];
}
