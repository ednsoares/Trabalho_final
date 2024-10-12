import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  ean: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  idCategory: number;

  @IsNotEmpty()
  @IsNumber()
  insUser: number; // ID do usuário que está inserindo

  @IsNotEmpty()
  insDate: Date;
}