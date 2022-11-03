import { ProductEntity } from '@entities/products'
import { IProductsRepository } from '@interfaces/repositories'
import { IGetProductsService } from '@interfaces/services'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetProductsService implements IGetProductsService {
    constructor(
        @inject('ProductRepository')
        private readonly repository: IProductsRepository
    ){}
    async execute(): Promise<ProductEntity[]> {
        try {
            return this.repository.list()
        } catch (error) {
            throw new Error(`Failed to get products, ${error.message}`)
        }
    }
}
