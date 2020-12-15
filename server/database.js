import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config()
export const db = new Sequelize(process.env.DB_URL);

export const connectToDB = async () => {
  try {
    await db.authenticate()
    console.log("db connected")
    return db;
  } catch (e) {
    console.log(e)
  }
};
