import { AppDataSource } from "../data-source";
import { Appointment } from "../entity/Appointment";
export const appointmentSeeder = async () => {
  await AppDataSource.initialize();

  const appointmentRepository = AppDataSource.getRepository(Appointment);

  // Seed 5 rows of data
  const appointments = [
    {
      date: new Date("2024-01-01").toISOString(),
      reason: "I have a headache",
      doctorId: "917b3c19-3782-4d84-b289-7fd4488fd7b6" ,
      patientId: "b05250f3-12d2-4c94-a397-5c02cbeb55f6" ,
      notes: "",
    },
    {
      date: new Date("2024-01-01").toISOString(),
      reason: "I have a headache",
      doctor: { id: "670ea3ce-5fec-49a4-980e-b0be3ed32b03" },
      patient: { id: "2a4f60c8-1191-43f2-a035-f80e2142abe2" },
      notes: "",
    },
  ];

  await appointmentRepository.save(appointments);``

  console.log("Seeding completed!");
};
