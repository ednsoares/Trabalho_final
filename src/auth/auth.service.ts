/*
descrição: Serviço responsável pela autenticação 
de usuários. Implementa a lógica para verificar 
credenciais de login, gerar tokens JWT e gerenciar a
segurança das senhas (como hash e comparação).

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.appUser.findUnique({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('E-mail e/ou senha incorretos, verifique e tente novamente');
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, type: user.type };
    return {
      id: user.id,
      type: user.type,
      name: user.username,
      token: this.jwtService.sign(payload), // Gerar token JWT
    };
  }

  async register(createUserDto: any): Promise<any> {
    const { email, password } = createUserDto;
    
    const existingUser = await this.prisma.appUser.findUnique({ where: { email } });
    if (existingUser) {
      throw new UnauthorizedException('Erro, usuário informado já existe!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.prisma.appUser.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
        insDate: new Date(),
        updDate: new Date(),
        lastPasswordChange: new Date(),
        isActive: true,
        passwordExpires: false,
      },
    });

    return { message: 'Usuário criado com sucesso!' };
  }
}