/*
descrição: 
Data Transfer Object (DTO) que define a estrutura 
dos dados necessários para criar um novo usuário. 
Utilizado para validar e garantir a
 integridade dos dados recebidos nas requisições.


 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/

import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  type: string; 

  @IsNotEmpty()
  @IsString()
  insUser: string; 

  @IsNotEmpty()
  @IsString()
  updUser: string; 

  @IsNotEmpty()
  @IsString()
  passwordValidity: Date; 

  @IsNotEmpty()
  @IsString()
  passwordExpires?: boolean;

  @IsNotEmpty()
  @IsString()
  isActive?: boolean; 
}
