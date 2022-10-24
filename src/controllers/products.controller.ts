import { Request, Response } from 'express'
import { HttpResponse, IHttpResponse } from 'src/interfaces/http'
import { ICreateProductService } from 'src/interfaces/services/createProduct.interface'

export class CreateProductController {
    constructor(readonly service: ICreateProductService){}
    async execute(req: Request): Promise<HttpResponse> {
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

            return 
        } catch (error) {
            
        }

    }
}
