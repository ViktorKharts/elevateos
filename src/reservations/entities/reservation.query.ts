import { IsString } from 'class-validator';

export class ReservationQuery {
  @IsString()
  readonly amenityId: string;

  @IsString()
  readonly timestamp: string;
}
