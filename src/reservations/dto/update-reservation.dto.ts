export class UpdateReservationDto {
  readonly userId?: number;
  readonly amenityId?: number;
  readonly startedAt?: number;
  readonly duration?: number;
  readonly isActive?: boolean;
}
