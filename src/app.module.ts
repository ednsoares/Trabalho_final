/*
descrição:  Módulo raiz da aplicação que 
importa todos os outros módulos (como UserModule,
 ProductModule, CategoryModule, e AuthModule)
 e configura as dependências da aplicação.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule, UsersModule, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AppModule {}