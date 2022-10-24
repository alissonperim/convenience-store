import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class BaseEntity {
    @PrimaryColumn('uuid', { unique: true })
    id!: string

    @Column({
        name: 'created_at',
        default: new Date(),
    })
    createdAt!: Date

    @Column({
        name: 'updated_at',
        nullable: true,
    })
    updatedAt?: Date

    @Column({
        name: 'deleted_at',
        nullable: true,
    })
    deletedAt?: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
