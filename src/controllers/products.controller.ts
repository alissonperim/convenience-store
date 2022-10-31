import { created, IHttpResponse } from '../interfaces/http'
import { ICreateProduct } from '../interfaces/requestObjects'
import { ICreateProductService } from '../interfaces/services'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateProductController {
    constructor(
        @inject('CreateProductService')
        private readonly service: ICreateProductService
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
            throw new Error(error?.message)
        }

    }
}
