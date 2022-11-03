import { Request, Response, Router } from 'express'
import { CreateProductController } from '../controllers/products/create.controller'
import { ICreateProduct } from '../interfaces/requestObjects'
import { container } from 'tsyringe'
import { GetProductsController } from '@controllers/products/get.controller'

export const routs = Router()

routs.post('/', async (req: Request, res: Response) => {
    const controller = container.resolve(CreateProductController)
    const {
        name,
        barcode,
        price,
        factoryPrice,
    }:ICreateProduct = req.body

    const response = await controller.execute({
        name,
        barcode,
        price,
        factoryPrice,
    })

    return res.status(response.code).json(response)
})

routs.get('/', async (req: Request, res: Response) => {
    const controller = container.resolve(GetProductsController)
    const response = await controller.execute()

    return res.status(response.code).json(response.obj)
})
