/*
descrição: Serviço que encapsula a interação 
com o ORM Prisma. Facilita as operações de banco 
de dados e fornece métodos para realizar consultas, 
atualizações e exclusões nos modelos definidos no Prisma.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/



import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}