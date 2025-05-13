import { IsBoolean, IsString } from 'class-validator';

export class CreateAmenityDto {
  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;
}
