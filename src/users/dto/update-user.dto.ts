import { IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  email?: string;

  @IsOptional()
  isActive?: boolean;
}
