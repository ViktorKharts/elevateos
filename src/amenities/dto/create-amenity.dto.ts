import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateAmenityDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
