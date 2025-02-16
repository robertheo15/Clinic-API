import { gql } from "apollo-server";

export const typeDefs = gql`
  type Patient {
    id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    gender: String!
    phone: String!
    email: String!
  }

  type Doctor {
    id: ID!
    name: String!
  }
  type Appointment {
    id: ID!
    date: String!
    doctor: Doctor!
    reason: String!
    patient: Patient!
    notes: String
    isDeleted: Boolean!
  }

  type MedicalHistory {
    id: ID!
    patient: Patient!
    condition: String!
    diagnosisDate: String!
    status: String!
  }

  type Medication {
  id: ID!
  name: String!
  dosage: String!
  frequency: String!
}

  type Query {
    doctors: [Doctor!]!
    doctor(id: ID!): Doctor

    patients: [Patient!]!
    patient(id: ID!): Patient

    appointments: [Appointment!]!
    appointment(id: ID!): Appointment

    medications: [Medication!]!
    medication(id: ID!): Medication

    medicalHistories: [MedicalHistory!]!
    medicalHistory(id: ID!): MedicalHistory
  }

  type Mutation {
    createDoctor(name: String!): Doctor!
    updateDoctor(id: ID!, name: String!): Doctor!
    deleteDoctor(id: ID!): Boolean!

    createAppointment(date: String!, reason: String!, doctorId: ID!, patientId: ID!): Appointment!
    updateAppointment(id: ID!, date: String!, reason: String!, doctorId: ID!, patientId: ID!): Appointment!
    deleteAppointment(id: ID!): Boolean!

    createPatient(firstName: String!, lastName: String!, dateOfBirth: String!, gender: String!, phone: String!, email: String!): Patient!
    updatePatient(id: ID!, firstName: String!, lastName: String!, dateOfBirth: String!, gender: String!, phone: String!, email: String!): Patient!
    deletePatient(id: ID!): Boolean!

    createMedication(name: String!, dosage: String!, frequency: String!): Medication!
    updateMedication(id: ID!, name: String!, dosage: String!, frequency: String!): Medication!
    deleteMedication(id: ID!): Boolean!

    createMedicalHistory(patientId: ID!, condition: String!, diagnosisDate: String!, status: String!): MedicalHistory!
    updateMedicalHistory(id: ID!, patientId: ID!, condition: String!, diagnosisDate: String!, status: String!): MedicalHistory!
    deleteMedicalHistory(id: ID!): Boolean!
  }
`;
