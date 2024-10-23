import z from "zod";
import { config } from "dotenv";

const environment = z.enum(["development", "production"]);
const environmentParsed = environment.parse(
  process.env.NODE_ENV || "development",
);

config({
  path: `./.env.${environmentParsed}.local`,
});

const envSchema = z.object({
  NODE_ENV: environment,
  POSTGRES_URL: z.string().url().optional(),
});

export const env = envSchema.parse(process.env);
