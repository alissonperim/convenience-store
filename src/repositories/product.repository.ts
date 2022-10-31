import { ProductEntity } from '../entities/products'
import { AppDataSource } from '../data'
import { IProductsRepository } from 'src/interfaces/repositories'
import { ICreateProduct } from '../interfaces/requestObjects'
import { Repository } from 'typeorm'

export class ProductRepository implements IProductsRepository {
    readonly dbcontext: Repository<ProductEntity> = AppDataSource.getRepository(ProductEntity)

    constructor(){}

    async create({ name, barcode, factoryPrice, price }: ICreateProduct): Promise<void> {
        const product = this.dbcontext.create({
            barcode,
            name,
            factoryPrice,
            price,
        })

        await this.dbcontext.save(product)
    }

    async findByBarcode(barcode: string): Promise<ProductEntity> {
        return this.dbcontext
            .createQueryBuilder('product')
            .where('product.barcode = :barcode', { barcode })
            .getOne()
    }

    async list(): Promise<ProductEntity[]>{
        return this.dbcontext.find()
    }

    async getById(id: string): Promise<ProductEntity> {
        return this.dbcontext.findOneByOrFail({ id })
    }
}
