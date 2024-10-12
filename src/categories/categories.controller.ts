/*
descrição: Controlador que gerencia as 
rotas para categorias de produtos. Processa
 as requisições, chama o CategoryService e 
retorna as respostas correspondentes.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthGuard } from '@nestjs/passport';
import { Category } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() categoryData: Category) {
    return this.categoriesService.create(categoryData);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: string, @Body() categoryData: Category) {
    return this.categoriesService.update(+id, categoryData);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
