import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  ean?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  idCategory?: number;

  @IsOptional()
  @IsNumber()
  updUser?: number; // ID do usuário que está atualizando

  @IsOptional()
  updDate?: Date;
}