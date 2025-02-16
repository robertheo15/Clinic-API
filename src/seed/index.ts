import { patientSeeder } from "./patient-seed";
import { doctorSeeder } from "./doctor-seed";
import { appointmentSeeder } from "./appointment-seed";
import { medicalHistorySeeder } from "./medicalhistory-seed";
import { medicationSeeder } from "./medication-seed";

doctorSeeder().catch((error: any) => console.error("Seeding failed:", error));
patientSeeder().catch((error: any) => console.error("Seeding failed:", error));
appointmentSeeder().catch((error: any) => console.error("Seeding failed:", error));
medicalHistorySeeder().catch((error: any) => console.error("Seeding failed:", error));
medicationSeeder().catch((error: any) => console.error("Seeding failed:", error));