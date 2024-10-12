import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }>;
    findAll(): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }>;
    update(id: number, data: UpdateProductDto): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }>;
}
