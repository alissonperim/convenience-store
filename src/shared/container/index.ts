import { IProductsRepository } from '../../interfaces/repositories'
import { ICreateProductService, IGetProductsService } from '../../interfaces/services'
import { ProductRepository } from '../../repositories/product.repository'
import { CreateProductService } from '../../services/products/create.service'
import { container } from 'tsyringe'
import { GetProductsService } from '@services/products/get.service'

container.registerSingleton<ICreateProductService>('CreateProductService', CreateProductService)
container.registerSingleton<IGetProductsService>('GetProductsService', GetProductsService)
container.registerSingleton<IProductsRepository>('ProductRepository', ProductRepository)
