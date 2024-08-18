import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("help_center", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export async function connectToDB() {
  try {
    await sequelize.authenticate();

    console.log("Connected to the database!");

    await sequelize.sync({ force: false, alter: true });

    console.log("All tables synced successfully!");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}
