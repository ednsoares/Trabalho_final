/*
descrição: 
Serviço responsável pela lógica de negócios 
relacionada às categorias. Inclui operações para
 criar, ler, atualizar e
 excluir categorias, utilizando o PrismaService.


 autores: Ednei Soares, Emilha de Souza, 
 Victor Martins e Willy Brener
*/


import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCategoryDto} from '../categories/dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCategoryDto) {
    const existingCategory = await this.prisma.category.findFirst({
      where: { name: data.name },
    });
    if (existingCategory) {
      throw new Error('Erro, categoria informada já existe!');
    }

    return this.prisma.category.create({ data });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException('Categoria não encontrada!');
    }
    return category;
  }

  async update(id: number, data: UpdateCategoryDto) {
    await this.findOne(id); // Verifica se a categoria existe
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verifica se a categoria existe
    return this.prisma.category.delete({
      where: { id },
    });
  }
}