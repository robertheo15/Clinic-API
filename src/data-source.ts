import { DataSource } from "typeorm";
import { Doctor } from "./entity/Doctor";
import { Patient } from "./entity/Patient";
import { Appointment } from "./entity/Appointment";
import { Medication } from "./entity/Medication";
import { MedicalHistory } from "./entity/MedicalHistory";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,  // Set to false when using migrations
  logging: true, // Enable logging
  entities: [Appointment, Doctor, MedicalHistory, Medication, Patient], // Add all your entities here
  migrations: ["src/migrations/*.ts"], // Add migrations if needed
  subscribers: [], // Add subscribers if needed
});