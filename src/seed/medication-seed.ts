import { AppDataSource } from "../data-source";
import { Medication } from "../entity/Medication";

export const medicationSeeder = async () => {
  await AppDataSource.initialize();

  const medicationRepository = AppDataSource.getRepository(Medication);

  // Seed 5 rows of data
  const medications = [
    {
      id: "ebad4936-6558-4a78-9f01-5f35b6dc0663",
      name: "Paracetamol",
      dosage: "100mg",
      frequency: "2 times a day",
    },
    {
      id: "f4a1e3c6-4763-4ac5-b72c-1632646bf579",
      name: "Ibuprofen",
      dosage: "100mg",
      frequency: "2 times a day",
    }
  ];

  await medicationRepository.save(medications);

  console.log("Seeding completed!");
};

