import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class Amenity {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;
}
