import { IProductsRepository } from '../../interfaces/repositories'
import { ICreateProductService } from '../../interfaces/services'
import { ProductRepository } from '../../repositories/product.repository'
import { CreateProductService } from '../../services/products/createProduct.service'
import { container } from 'tsyringe'

container.registerSingleton<ICreateProductService>('CreateProductService', CreateProductService)
container.registerSingleton<IProductsRepository>('ProductRepository', ProductRepository)
