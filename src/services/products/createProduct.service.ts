import { IProductsRepository } from 'src/interfaces/repositories'
import { ICreateProduct } from 'src/interfaces/requestObjects'
import { ICreateProductService } from 'src/interfaces/services'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateProductService implements ICreateProductService {
    constructor(
        @inject('ProductRepository')
        readonly productRepo: IProductsRepository
    ) {}

    async execute({ name, barcode, price, factoryPrice }: ICreateProduct) {
        const barcodeIsAlreadyRegistered = await this.productRepo.findByBarCode(barcode)

        if (barcodeIsAlreadyRegistered) {
            throw new Error('A product with this barcode is already registered')
        }

        return this.productRepo.create({ name, barcode, price, factoryPrice })
    }
}
