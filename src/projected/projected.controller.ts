import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // Importando o guard

@Controller('protected') // Definindo a rota base
export class ProtectedController {
  @UseGuards(AuthGuard('jwt')) // Aplicando o guard de autenticação
  @Get() // Definindo um método GET
  getProtectedData() {
    return { message: 'Este é um dado protegido' }; // Retornando dados se a autenticação for bem-sucedida
  }
}