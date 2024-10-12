/*
descrição: 

Serviço que gerencia a lógica de negócios dos 
produtos. Implementa operações CRUD e interage 
com o banco de dados através do PrismaService.

 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    const existingProduct = await this.prisma.product.findUnique({
      where: { ean: data.ean },
    });
    if (existingProduct) {
      throw new Error('Erro, produto informado já existe!');
    }

    return this.prisma.product.create({ data });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Produto não encontrado!');
    }
    return product;
  }

  async update(id: number, data: UpdateProductDto) {
    await this.findOne(id); // Verifica se o produto existe
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verifica se o produto existe
    return this.prisma.product.delete({
      where: { id },
    });
  }
}