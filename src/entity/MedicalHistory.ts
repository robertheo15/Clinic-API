import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Patient } from "./Patient";

@ObjectType()
@Entity("medical_histories")
export class MedicalHistory {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  condition!: string;

  @Field()
  @Column({ name: "diagnosis_date" })
  diagnosisDate!: Date;

  @Field()
  @Column()
  status!: string;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.medicalHistories)
  @JoinColumn({ name: 'patient_id' })
  patient!: Patient;
}

