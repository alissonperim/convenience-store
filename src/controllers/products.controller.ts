import { Request } from 'express'
import { created, IHttpResponse } from 'src/interfaces/http'
import { ICreateProduct } from 'src/interfaces/requestObjects'
import { ICreateProductService } from 'src/interfaces/services/createProduct.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateProductController {
    constructor(
        @inject('CreateProductService')
        readonly service: ICreateProductService
    ){}
    async execute({
        name,
        barcode,
        price,
        factoryPrice,
    }: ICreateProduct): Promise<IHttpResponse> {
        try {
            await this.service.execute({
                barcode,
                factoryPrice,
                name,
                price,
            })

            return created()
        } catch (error) {
            
        }

    }
}
