import { IsOptional, IsString, IsInt, IsDate } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  ean?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  idCategory?: number;

  @IsOptional()
  @IsDate()
  insDate?: Date;

  @IsOptional()
  @IsDate()
  updDate?: Date;

  @IsOptional()
  @IsInt()
  insUser?: number;

  @IsOptional()
  @IsInt()
  updUser?: number;
}
