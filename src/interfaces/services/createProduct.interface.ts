import { ICreateProduct } from '../requestObjects'

export interface ICreateProductService {
    execute({ barcode, factoryPrice, name, price }: ICreateProduct): Promise<void>
}
