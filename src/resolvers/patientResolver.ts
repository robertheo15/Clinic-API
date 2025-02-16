import { Patient } from "../entity/Patient";
import { AppDataSource } from "../data-source";

export const patientResolvers = {
  Query: {
    patients: async (_parent: any) => {
      return await AppDataSource.getRepository(Patient).find();
    },
    patient: async (_parent: any, { id }: { id: string }) => {
      const patient = await AppDataSource.getRepository(Patient).findOneBy({ id });
      if (!patient) {
        throw new Error("Patient not found");
      }
      return patient;
    },
  },
  Mutation: {
    createPatient: async (_parent: any, { firstName, lastName, dateOfBirth, gender, phone, email }: { firstName: string, lastName: string, dateOfBirth: string, gender: string, phone: string, email: string}) => {
      const patient = AppDataSource.getRepository(Patient).create({ firstName, lastName, dateOfBirth, gender, phone, email });
      return await AppDataSource.getRepository(Patient).save(patient);
    },

    updatePatient: async (_parent: any, { id, firstName, lastName, dateOfBirth, gender, phone, email }: { id: string, firstName: string, lastName: string, dateOfBirth: string, gender: string, phone: string, email: string }) => {
      await AppDataSource.getRepository(Patient).update(id, { firstName, lastName, dateOfBirth, gender, phone, email });
      return await AppDataSource.getRepository(Patient).findOneBy({ id });
    },

    deletePatient: async (_parent: any, { id }: { id: number }) => {
      await AppDataSource.getRepository(Patient).delete(id);
      return true;
    },  
  },
};