import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
interface CategoryPaginationOptions extends IPaginationOptions {
    search?: string;
    searchField?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export declare class CategoriesService {
    private readonly categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(dto: CreateCategoryDto): Promise<Category | null>;
    findAll(options: CategoryPaginationOptions): Promise<Pagination<Category>>;
    findOne(id: string): Promise<Category | null>;
    update(id: string, dto: UpdateCategoryDto): Promise<Category | null>;
    remove(id: string): Promise<Category | null>;
}
export {};
