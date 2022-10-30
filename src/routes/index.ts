import express, { Router } from 'express'
import { routs as products } from './products.routes'

const app = express()
export const router = Router()

const version = 'v1'

router.use(`/${version}/products`, products)
