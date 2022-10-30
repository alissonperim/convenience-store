import { Column, Entity } from 'typeorm'
import { BaseEntity } from './base'

@Entity({
    name: 'products'
})
export class ProductEntity extends BaseEntity {
    @Column()
    name: string

    @Column("decimal")
    price: number

    @Column("decimal")
    factoryPrice: number

    @Column()
    barcode: string
}
