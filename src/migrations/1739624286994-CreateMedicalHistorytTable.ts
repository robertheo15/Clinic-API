import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMedicalHistorytTable1739624286994 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "medical_histories" (
                "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                "patient_id" uuid REFERENCES patients(id),
                "condition" text NOT NULL,
                "diagnosis_date" DATE NOT NULL,
                "status" text NOT NULL,
                "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medical_histories"`);
    }
}
