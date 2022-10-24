import { Column, Entity } from 'typeorm'
import { BaseEntity } from './base'

@Entity()
export class ProductEntity extends BaseEntity {
    @Column()
    name: string

    @Column("double")
    price: number

    @Column("double")
    factoryPrice: number

    @Column()
    barcode: string
}
