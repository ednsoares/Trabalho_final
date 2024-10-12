/*
descrição: 
criação do main da aplicação


 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura o Global Validation Pipe para validar os DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades não permitidas
    forbidNonWhitelisted: true, // Retorna um erro se propriedades não permitidas forem enviadas
    transform: true, // Transforma os tipos automaticamente
  }));

  // Configura a porta do servidor
  const PORT = process.env.PORT || 3000;

  // Inicia o servidor
  await app.listen(PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
}

bootstrap();