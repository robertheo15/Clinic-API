import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePatientTable1739623622473 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "patients" (
                "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                "first_name" VARCHAR(255) NOT NULL,
                "last_name" VARCHAR(255) NOT NULL,
                "date_of_birth" DATE NOT NULL,
                "gender" VARCHAR(255) NOT NULL,
                "phone" text NOT NULL,
                "email" text NOT NULL,
                "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
        }

        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`DROP TABLE "patients"`);
        }
}
