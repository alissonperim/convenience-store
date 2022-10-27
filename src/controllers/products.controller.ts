import { Request } from 'express'
import { created, IHttpResponse } from 'src/interfaces/http'
import { ICreateProductService } from 'src/interfaces/services/createProduct.interface'

export class CreateProductController {
    constructor(readonly service: ICreateProductService){}
    async execute(req: Request): Promise<IHttpResponse> {
        const {
            barcode,
            factoryPrice,
            name,
            price,
        } = req.body

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
