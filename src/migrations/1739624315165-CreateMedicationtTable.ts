import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMedicationtTable1739624315165 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "medications" (
                "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                "name" text NOT NULL,
                "dosage" text NOT NULL,
                "frequency" text NOT NULL,
                "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );

            CREATE INDEX "idx_appointments_patient" ON appointments(patient_id);
            CREATE INDEX "idx_appointments_doctor" ON appointments(doctor_id);
            CREATE INDEX "idx_medical_histories_patient" ON medical_histories(patient_id);
        `);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medications"`);
    }
}
