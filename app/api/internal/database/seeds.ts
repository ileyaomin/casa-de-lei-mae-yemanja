import { client, db } from ".";
import { frequencies, giras } from "./schema";

async function run() {
  await db.delete(frequencies);
  await db.delete(giras);

  const gira: typeof giras.$inferInsert = {
    name: "Baianos",
  };

  await db.insert(giras).values(gira);
  console.log("New gira created!");
}

run().finally(() => client.end());
