import { CategoriesService } from './categories.service';
import { Category } from '@prisma/client';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(categoryData: Category): Promise<{
        id: number;
        name: string;
    }>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    update(id: string, categoryData: Category): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
