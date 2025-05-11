import { IsString } from 'class-validator';

export class ReservationQuery {
  @IsString()
  readonly amenityId: number;

  @IsString()
  readonly timestamp: number;
}
