// import "reflect-metadata";
// import { ApolloServer } from "apollo-server";
// import { buildSchema } from "type-graphql";
// import { DataSource } from "typeorm";
// // import { Appointment } from "./entity/Appointment";
// import { Doctor } from "./entity/Doctor";
// // import { Patient } from "./entity/Patient";
// // import { AppointmentResolver } from "./resolver/AppointmentResolver";

// const main = async () => {
//   const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "root",
//     password: "root",
//     database: "local-db",
//     // entities: [Appointment, Doctor, Patient],
//     entities: [Doctor],
//     synchronize: true,
//     logging: true,
//   });

//   await AppDataSource.initialize();

//   const schema = await buildSchema({
//     resolvers: [AppointmentResolver],
//     validate: false,
//   });

//   const server = new ApolloServer({
//     schema,
//     context: () => ({ AppDataSource })
//   });

//   const { url } = await server.listen(4000);
//   console.log(`Server is running at ${url}`);
// };

// main().catch((err) => console.error(err));
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers";
import { AppDataSource } from "./data-source";

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
  }

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();