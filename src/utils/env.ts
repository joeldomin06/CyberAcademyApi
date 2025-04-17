import * as dotenv from "dotenv"
dotenv.config()

export const envObject = {
  JWT_SECRET: process.env.JWT_SECRET || '',
};
