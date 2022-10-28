import { IProductsRepository } from 'src/interfaces/repositories'
import { ICreateProductService } from 'src/interfaces/services'
import { ProductRepository } from 'src/repositories/product.repository'
import { CreateProductService } from 'src/services/products/createProduct.service'
import { container } from 'tsyringe'

container.registerSingleton<ICreateProductService>('CreateProductService', CreateProductService)
container.registerSingleton<IProductsRepository>('ProductRepository', ProductRepository)
