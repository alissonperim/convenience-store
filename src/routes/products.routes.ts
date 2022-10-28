import { Request, Router } from 'express'
import { CreateProductController } from 'src/controllers/products.controller'
import { ICreateProduct } from 'src/interfaces/requestObjects'
import { container } from 'tsyringe'

export const routs = Router()

routs.post('/', (req: Request) => {
    const controller = container.resolve(CreateProductController)
    const {
        name,
        barcode,
        price,
        factoryPrice,
    }:ICreateProduct = req.body

    return controller.execute({
        name,
        barcode,
        price,
        factoryPrice,
    })
})
