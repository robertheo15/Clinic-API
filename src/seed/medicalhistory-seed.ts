import { AppDataSource } from "../data-source";
import { MedicalHistory } from "../entity/MedicalHistory";

export const medicalHistorySeeder = async () => {
  await AppDataSource.initialize();

  const medicalHistoryRepository = AppDataSource.getRepository(MedicalHistory);

  // Seed 5 rows of data
  const medicalHistories = [
    {
      id: "ecd515d2-8300-4384-8a1f-f6837ad16466",
      condition: "Fever",
      diagnosisDate: new Date("2024-01-01"),
      status: "Active",
      patient: { id: "b05250f3-12d2-4c94-a397-5c02cbeb55f6" },
    },
    {
      id: "961134cc-d844-477a-b7e4-813365078ac9",
      condition: "Fever",
      diagnosisDate: new Date("2024-01-01"),
      status: "Active",
      patient: { id: "2a4f60c8-1191-43f2-a035-f80e2142abe2" },
    },
  ];

  await medicalHistoryRepository.save(medicalHistories);

  console.log("Seeding completed!");
};

