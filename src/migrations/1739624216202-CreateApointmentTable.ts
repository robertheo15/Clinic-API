import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateApointmentTable1739624216202 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "appointments" (
                "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                "patient_id" uuid REFERENCES patients(id),
                "doctor_id" uuid REFERENCES doctors(id),
                "date" TIMESTAMP WITH TIME ZONE NOT NULL,
                "reason" text NOT NULL,
                "notes" text,
                "is_deleted" boolean DEFAULT false,
                "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "appointments"`);
    }
}
