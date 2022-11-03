import { ProductEntity } from '@entities/products'

export interface IGetProductsService {
    execute(): Promise<ProductEntity[]>
}
