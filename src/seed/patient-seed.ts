import { AppDataSource } from "../data-source";
import { Patient } from "../entity/Patient";

export const patientSeeder = async () => {
  await AppDataSource.initialize();

  const patienRepository = AppDataSource.getRepository(Patient);

  // Seed 5 rows of data
  const patients = [
    {
      id: "b05250f3-12d2-4c94-a397-5c02cbeb55f6",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: new Date("1990-01-01"),
      gender: "Male",
      email: "john.doe@example.com",
      phone: "1234567890",
    },
    {
      id: "2a4f60c8-1191-43f2-a035-f80e2142abe2",
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: new Date("1995-02-15"),
      gender: "Female",
      email: "jane.smith@example.com",
      phone: "1234567890",
    },
    {
      id: "7b9bcd7a-10aa-41ae-8a37-f5181b0ef0e0",
      firstName: "Michael",
      lastName: "Johnson",
      dateOfBirth: new Date("1988-03-20"),
      gender: "Male",
      email: "michael.johnson@example.com",
      phone: "1234567890",
    },
    {
      id: "a95f2755-8135-41a5-a469-fb0e34ea5e30",
      firstName: "Emily",
      lastName: "Davis",
      dateOfBirth: new Date("1992-04-10"),
      gender: "Female",
      email: "emily.davis@example.com",
      phone: "1234567890"
    }
  ];

  await patienRepository.save(patients);

  console.log("Seeding completed!");
};

