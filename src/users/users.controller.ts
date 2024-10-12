/*
descrição: Controlador que define as 
rotas relacionadas a usuários. Lida 
com as requisições HTTP, delegando as 
operações ao UserService e retornando 
as respostas apropriadas ao cliente.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport'; 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.usersService.login(loginDto);
  }

  @Post()
  @UseGuards(AuthGuard('jwt')) // Protege a rota com JWT
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.usersService.findAll();
  }
}