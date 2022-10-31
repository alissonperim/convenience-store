import { Request, Response, Router } from 'express'
import { CreateProductController } from '../controllers/products.controller'
import { ICreateProduct } from '../interfaces/requestObjects'
import { container } from 'tsyringe'

export const routs = Router()

routs.post('/', async (req: Request, res: Response) => {
    const controller = container.resolve(CreateProductController)
    const {
        name,
        barcode,
        price,
        factoryPrice,
    }:ICreateProduct = req.body

    await controller.execute({
        name,
        barcode,
        price,
        factoryPrice,
    })

    return res.json({message: 'Created'})
})
