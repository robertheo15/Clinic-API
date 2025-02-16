import { Doctor } from "../entity/Doctor";
import { AppDataSource } from "../data-source";

export const doctorResolvers = {
  Query: {
    doctors: async (_parent: any) => {
      return await AppDataSource.getRepository(Doctor).find();
    },
    doctor: async (_parent: any, { id }: { id: string }) => {
      const doctor = await AppDataSource.getRepository(Doctor).findOneBy({ id });
      if (!doctor) {
        throw new Error("Doctor not found");
      }
      return doctor;
    },
  },
  Mutation: {
    createDoctor: async (_parent: any, { name }: { name: string }) => {
      const doctor = AppDataSource.getRepository(Doctor).create({ name });
      return await AppDataSource.getRepository(Doctor).save(doctor);
    },
    updateDoctor: async (_parent: any, { id, name }: { id: string; name: string }) => {
      await AppDataSource.getRepository(Doctor).update(id, { name });
      return await AppDataSource.getRepository(Doctor).findOneBy({ id });
    },
    deleteDoctor: async (_parent: any, { id }: { id: string }) => {
      await AppDataSource.getRepository(Doctor).delete(id);
      return true;
    },
  },
};