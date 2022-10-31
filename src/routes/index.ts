import { Router } from 'express'
import { AppDataSource } from '../data'
import { routs as products } from './products.routes'

export const router = Router()

const version = 'v1'
AppDataSource
    .initialize()
    .then(() => {
        console.log("DB connection open")
    })
    .catch((e) => {
        console.log(e)
    })


router.use(`/${version}/products`, products)
