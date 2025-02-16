import { Appointment } from "../entity/Appointment";
import { AppDataSource } from "../data-source";

export const appointmentResolvers = {
  Query: {
    appointments: async () => {
      return await AppDataSource.getRepository(Appointment).find({
        relations: ["patient", "doctor"],
        where: { isDeleted: false }
      });
    },
    appointment: async (_: any, { id }: { id: string }) => {
      return await AppDataSource.getRepository(Appointment).findOne({
        where: { id, isDeleted: false },
        relations: ["patient", "doctor"]
      });
    },
  },

  Mutation: {
    createAppointment: async (_: any, { date, reason, doctorId, patientId }: any) => {
      const appointmentRepo = AppDataSource.getRepository(Appointment);
      const newAppointment = appointmentRepo.create({ date, reason, doctorId, patientId });
      await appointmentRepo.save(newAppointment);
      return newAppointment;
    },
    updateAppointment: async (_: any, { id, date, reason, doctorId, patientId }: any) => {
      await AppDataSource.getRepository(Appointment).update(id, { date, reason, doctorId, patientId });
      return await AppDataSource.getRepository(Appointment).findOneBy({ id });
    },
    deleteAppointment: async (_: any, { id }: any) => {
      await AppDataSource.getRepository(Appointment).update(id, { isDeleted: true });
      return true;
    }
  }
};
