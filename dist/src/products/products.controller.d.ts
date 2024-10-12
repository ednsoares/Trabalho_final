import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(productData: Product): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }>;
    findOne(id: string): Promise<{
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
    update(id: string, productData: Product): Promise<{
        id: number;
        insDate: Date;
        updDate: Date;
        insUser: number;
        updUser: number;
        name: string;
        ean: string;
        idCategory: number;
    }>;
    remove(id: string): Promise<{
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
