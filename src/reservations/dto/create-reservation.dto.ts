import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  readonly userId: number;

  @IsNumber()
  readonly amenityId: number;

  @IsNumber()
  readonly startsAt: number;

  @IsNumber()
  readonly endsAt: number;

  @IsString()
  readonly date: string;

  @ApiProperty({ description: 'Should be provided in yyyy-mm-dd format.' })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;
}
