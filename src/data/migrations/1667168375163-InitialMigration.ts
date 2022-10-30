import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1667168375163 implements MigrationInterface {
    name = 'InitialMigration1667168375163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2022-10-30T22:19:37.148Z"', "updated_at" TIMESTAMP, "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "price" numeric NOT NULL, "factoryPrice" numeric NOT NULL, "barcode" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
