import { AppDataSource } from "../data-source";
import { MedicalHistory } from "../entity/MedicalHistory";
import { Patient } from "../entity/Patient";
export const medicalHistoryResolvers = {
  Query: {
    medicalHistories: async () => {
      return await AppDataSource.getRepository(MedicalHistory).find({
        relations: ["patient"],
      });
    },

    medicalHistory: async (_parent: any, { id }: { id: string }) => {
      const medicalHistoryRepository = AppDataSource.getRepository(MedicalHistory);
      const medicalHistory = await medicalHistoryRepository.findOne({
        where: { id },
        relations: ["patient"],
      });
      if (!medicalHistory) {
        throw new Error("Medical history not found");
      }

      return medicalHistory;
    },
  },

  Mutation: {
    createMedicalHistory: async (_: any, { patientId, condition, diagnosisDate, status }: any) => {
      const medicalHistoryRepository = AppDataSource.getRepository(MedicalHistory);
      const patientRepository = AppDataSource.getRepository(Patient);

      const patient = await patientRepository.findOneBy({ id: patientId });
      if (!patient) {
        throw new Error("Patient not found");
      }

      const newMedicalHistory = medicalHistoryRepository.create({
        patient,
        condition,
        diagnosisDate,
        status,
      });
      return await medicalHistoryRepository.save(newMedicalHistory);
    },

    updateMedicalHistory: async (_: any, { id, patientId, condition, diagnosisDate, status }: any) => {
      const medicalHistoryRepository = AppDataSource.getRepository(MedicalHistory);
      const patientRepository = AppDataSource.getRepository(Patient);

      const medicalHistory = await medicalHistoryRepository.findOne({
        where: { id },
        relations: ["patient"],
      });
      if (!medicalHistory) {
        throw new Error("Medical history not found");
      }

      if (patientId) {
        const patient = await patientRepository.findOneBy({ id: patientId });
        if (!patient) {
          throw new Error("Patient not found");
        }
        medicalHistory.patient = patient;
      }

      medicalHistory.condition = condition;
      medicalHistory.diagnosisDate = diagnosisDate;
      medicalHistory.status = status;

      return await medicalHistoryRepository.save(medicalHistory);
    },

    deleteMedicalHistory: async (_: any, { id }: any) => {
      const medicalHistoryRepository = AppDataSource.getRepository(MedicalHistory);
      const medicalHistory = await medicalHistoryRepository.findOneBy({ id });
      if (!medicalHistory) {
        throw new Error("Medical history not found");
      }

      await medicalHistoryRepository.remove(medicalHistory);
      return true;
    },
  },
};