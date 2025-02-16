import { AppDataSource } from "../data-source";
import { Doctor } from "../entity/Doctor";

export const doctorSeeder = async () => {
  await AppDataSource.initialize();

  const doctorRepository = AppDataSource.getRepository(Doctor);

  // Seed 5 rows of data
  const doctors = [
    { 
      id: "917b3c19-3782-4d84-b289-7fd4488fd7b6",
      name: "Dr. Smith" 
    },
    { 
      id: "670ea3ce-5fec-49a4-980e-b0be3ed32b03",
      name: "Dr. Smith" 
    },
    { 
      id: "527b45d6-8b1f-4e2c-a610-6dac28ca3994",
      name: "Dr. Smith" 
    },
    { 
      id: "c55924aa-55ea-47b3-8e34-4fe70627ad3f",
      name: "Dr. Smith" 
    },
    { 
      id: "ee7a3871-2879-484e-a746-b6f1a9e729b8",
      name: "Dr. Smith" 
    },
  ];

  await doctorRepository.save(doctors);

  console.log("Seeding completed!");
};
