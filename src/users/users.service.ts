
/*
descrição: Serviço que contém a lógica de negócios
 relacionada aos usuários. Implementa operações CRUD
  (criar, ler, atualizar e excluir) e utiliza o 
PrismaService para interagir com o banco de dados.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AppUser } from '@prisma/client'; // Certifique-se de que esse tipo corresponde ao modelo no seu Prisma

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async create(data: CreateUserDto): Promise<AppUser> { // Corrigido para usar AppUser
    const existingUser = await this.prisma.appUser.findUnique({
      where: { email: data.email },
    });
    
    if (existingUser) {
      throw new ConflictException('Erro, usuário informado já existe!');
    }
  
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    return this.prisma.appUser.create({
      data: {
        ...data,
        password: hashedPassword,
        type: 'basic', // Certifique-se de ajustar conforme sua lógica de negócio
        insUser: 'system',
        updUser: 'system',
        passwordValidity: new Date(),
        passwordExpires: false,
        isActive: true,
      },
    });
  }
  
  async login(loginDto: { email: string; password: string }): Promise<{ id: number; type: string; name: string; token: string }> {
    const user = await this.prisma.appUser.findUnique({
      where: { email: loginDto.email },
    });

    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new Error('E-mail e/ou senha incorretos, verifique e tente novamente');
    }

    const token = this.jwtService.sign({ id: user.id, email: user.email });
    return { id: user.id, type: user.type, name: user.username, token };
  }

  async findAll(): Promise<AppUser[]> { // Corrigido para usar AppUser
    return this.prisma.appUser.findMany();
  }

  async findOne(id: number): Promise<AppUser> { // Corrigido para usar AppUser
    const user = await this.prisma.appUser.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }
    return user;
  }

  async findById(id: number): Promise<AppUser> { // Método findById
    return this.findOne(id); // Reutiliza o método findOne para verificar se o usuário existe
  }

  async update(id: number, data: UpdateUserDto): Promise<AppUser> { // Corrigido para usar AppUser
    await this.findOne(id); // Verifica se o usuário existe
    return this.prisma.appUser.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<AppUser> { // Corrigido para usar AppUser
    await this.findOne(id); // Verifica se o usuário existe
    return this.prisma.appUser.delete({
      where: { id },
    });
  }
}
