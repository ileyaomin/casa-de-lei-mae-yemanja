import { drizzle } from "drizzle-orm/node-postgres";
import { frequencies, giras } from "./schema";
import { env } from "@/env";

async function run() {
  const db = drizzle(env.POSTGRES_URL);
  await db.delete(frequencies);
  await db.delete(giras);

  // const gira: typeof giras.$inferInsert = {
  //   id: randomUUID(),
  //   name: "Baianos",
  // };

  // await db.insert(giras).values(gira);
  console.log("New gira created!");
}

run();
