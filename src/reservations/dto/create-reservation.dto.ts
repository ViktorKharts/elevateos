import { IsBoolean, IsNumber } from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  readonly userId: number;

  @IsNumber()
  readonly amenityId: number;

  @IsNumber()
  readonly startedAt: number;

  @IsNumber()
  readonly duration: number;

  @IsBoolean()
  readonly isActive: boolean;
}
