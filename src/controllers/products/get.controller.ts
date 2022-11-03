import { IHttpResponse, ok } from '../../interfaces/http'
import { IGetProductsService } from '../../interfaces/services/getProducts.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetProductsController {
    constructor(
        @inject('GetProductsService')
        private readonly service: IGetProductsService
    ){}

    async execute(): Promise<IHttpResponse> {
        const products = await this.service.execute()

        return ok(products)
    }
}
