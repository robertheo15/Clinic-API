import { Medication } from "../entity/Medication";
import { AppDataSource } from "../data-source";

export const medicationResolvers = {
  Query: {
    medications: async () => {
      return await AppDataSource.getRepository(Medication).find();
    },
    medication: async (_parent: any, { id }: { id: string }) => {
      const medication = await AppDataSource.getRepository(Medication).findOneBy({ id: id });
      if (!medication) {
        throw new Error("Medication not found");
      }
      return medication;
    },
  },
  Mutation: {
    createMedication: async (_: any, { name, dosage, frequency }: { name: string, dosage: string, frequency: string }) => {
      return await AppDataSource.getRepository(Medication).save({ name, dosage, frequency });
    },
    updateMedication: async (_: any, { id, name, dosage, frequency }: { id: string, name: string, dosage: string, frequency: string }) => {
      await AppDataSource.getRepository(Medication).update(id, { name, dosage, frequency });
      return await AppDataSource.getRepository(Medication).findOneBy({ id });
    },
    deleteMedication: async (_: any, { id }: { id: string }) => {
      await AppDataSource.getRepository(Medication).delete(id);
      return true;
    }
  }
};
