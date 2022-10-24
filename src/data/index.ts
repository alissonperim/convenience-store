import 'reflect-metadata'
import 'dotenv/config'
import { BaseEntity } from '@entities/base'
import { ProductEntity } from '@entities/products'
import { DataSource } from 'typeorm'

const {
    DB_PORT,
    DB_HOST,
    DB_USER,
    DB_PW,
    DB_NAME,
} = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USER,
    password: DB_PW,
    database: DB_NAME,
    entities: [
        BaseEntity,
        ProductEntity,
    ],
    migrations: [
        "./migrations/*.ts"
    ]
})
