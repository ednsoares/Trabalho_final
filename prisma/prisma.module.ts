import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Para que o PrismaService possa ser usado em outros módulos
})
export class PrismaModule {}