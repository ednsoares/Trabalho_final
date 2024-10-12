import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Defina sua chave secreta aqui
      signOptions: { expiresIn: '1h' }, // Duração do token
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthService],
})
export class UsersModule {}