import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseCreation1677200077539 implements MigrationInterface {
    name = 'DatabaseCreation1677200077539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_movies" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_d1570584f6f75c8845774c4a57e" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "temporary_movies"("id", "name", "description", "duration", "price") SELECT "id", "name", "description", "duration", "price" FROM "movies"`);
        await queryRunner.query(`DROP TABLE "movies"`);
        await queryRunner.query(`ALTER TABLE "temporary_movies" RENAME TO "movies"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" RENAME TO "temporary_movies"`);
        await queryRunner.query(`CREATE TABLE "movies" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "movies"("id", "name", "description", "duration", "price") SELECT "id", "name", "description", "duration", "price" FROM "temporary_movies"`);
        await queryRunner.query(`DROP TABLE "temporary_movies"`);
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
