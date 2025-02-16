import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

@ObjectType()
@Entity("appointments")
export class Appointment {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  date!: string;

  @Field()
  @Column()
  reason!: string;

  @Field(() => String)
  @Column({ name: "patient_id" })
  patientId!: string;

  @Field(() => String)
  @Column({ name: "doctor_id" })
  doctorId!: string;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.appointments)
  @JoinColumn({ name: "patient_id" })  // ✅ Explicitly linking to patient_id
  patient!: Patient;

  @Field(() => Doctor)
  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  @JoinColumn({ name: "doctor_id" })  // ✅ Explicitly linking to doctor_id
  doctor!: Doctor;

  @Field()
  @Column({ name: "is_deleted", default: false })
  isDeleted!: boolean;
}
