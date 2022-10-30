import { Request, Router } from 'express'
import { CreateProductController } from '../controllers/products.controller'
import { ICreateProduct } from '../interfaces/requestObjects'
import { container } from 'tsyringe'

export const routs = Router()

routs.post('/', (req: Request) => {
    console.log('ENTROU AQUI?')
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
