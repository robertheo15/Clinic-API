import { patientResolvers } from "./patientResolver";
import { doctorResolvers } from "./doctorResolver";
import { appointmentResolvers } from "./appointmentResolver";
import { medicationResolvers } from "./medicationResolver";
import { medicalHistoryResolvers } from "./medicalHistoryResolver";

export const resolvers = [patientResolvers, doctorResolvers, appointmentResolvers, medicationResolvers, medicalHistoryResolvers];