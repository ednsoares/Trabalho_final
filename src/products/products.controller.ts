/*
descrição: Controlador que define as rotas
 relacionadas a produtos. Recebe requisições HTTP,
chama métodos do ProductService e retorna os resultados.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '@nestjs/passport';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() productData: Product) {
    return this.productsService.create(productData);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.productsService.findAll();
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: string, @Body() productData: Product) {
    return this.productsService.update(+id, productData);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
