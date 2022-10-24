import { IProductsRepository } from 'src/interfaces/repositories'
import { ICreateProduct } from 'src/interfaces/requestObjects'
import { ICreateProductService } from 'src/interfaces/services'

export class CreateProductService implements ICreateProductService {
    constructor(readonly productRepo: IProductsRepository) {}

    async execute({ name, barcode, price, factoryPrice }: ICreateProduct) {
        const barcodeIsAlreadyRegistered = await this.productRepo.findByBarCode(barcode)

        if (barcodeIsAlreadyRegistered) {
            throw new Error('A product with this barcode is already registered')
        }

        return this.productRepo.create({ name, barcode, price, factoryPrice })
    }
}
