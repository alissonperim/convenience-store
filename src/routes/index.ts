import express, { Router } from 'express'
import { routs as products } from './products.routes'

const app = express()
const rout = Router()
const version = 'v1'

rout.use(`/${version}/products`, products)
