import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service'; // Certifique-se de que o caminho esteja correto
import { UsersModule } from '../users/users.module'; // Se você tem um UsersModule

@Module({
  imports: [UsersModule], // Certifique-se de que outros módulos necessários estão importados
  providers: [AuthService, JwtService, PrismaService], // Adicione PrismaService aqui
  exports: [AuthService], // Exporte AuthService se for necessário em outros módulos
})
export class AuthModule {}