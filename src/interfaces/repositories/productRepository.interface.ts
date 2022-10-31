import { ProductEntity } from '../../entities/products'
import { ICreateProduct } from '../requestObjects'

export interface IProductsRepository {
    create({ name, barcode, factoryPrice,price }: ICreateProduct): Promise<void>
    findByBarcode(barcode: string): Promise<ProductEntity>
    list(): Promise<ProductEntity[]>
    getById(id: string): Promise<ProductEntity>
}
