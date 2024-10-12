import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  ean: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  idCategory: number;

  @IsNotEmpty()
  @IsDate()
  insDate: Date;

  @IsNotEmpty()
  @IsDate()
  updDate: Date;

  @IsNotEmpty()
  @IsInt()
  insUser: number;

  @IsNotEmpty()
  @IsInt()
  updUser: number;
}
