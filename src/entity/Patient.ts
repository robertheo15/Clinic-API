import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Appointment } from "./Appointment";
import { MedicalHistory } from "./MedicalHistory";

@ObjectType()
@Entity("patients")
export class Patient {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column({ name: "first_name" })
  firstName!: string;

  @Field() 
  @Column({ name: "last_name" })
  lastName!: string;

  @Field()
  @Column({ name: "date_of_birth" })
  dateOfBirth!: Date;

  @Field()
  @Column({ name: "gender" })
  gender!: string;

  @Field()
  @Column({ name: "phone" })
  phone!: string;

  @Field()
  @Column({ name: "email" })
  email!: string;

  @Field(() => [Appointment])
  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments!: Appointment[];

  @Field(() => [MedicalHistory])
  @OneToMany(() => MedicalHistory, (medicalHistory) => medicalHistory.patient)
  medicalHistories!: MedicalHistory[];
}
