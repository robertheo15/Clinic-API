import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Appointment } from "./Appointment";

@ObjectType()
@Entity("doctors")
export class Doctor {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Appointment])
  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments!: Appointment[];
}
