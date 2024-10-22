import { client, db } from ".";
import { assistance, frequencies, giras, sons } from "./schema";

async function run() {
  await db.delete(frequencies);
  await db.delete(assistance);
  await db.delete(giras);
  await db.delete(sons);

  const sonsList: (typeof sons.$inferInsert)[] = [
    {
      name: "Ruan",
      itAnswer: true,
    },
    {
      name: "Gabriel",
      itAnswer: false,
    },
    {
      name: "Franklim",
      itAnswer: true,
    },
  ];

  const createdSons = await db.insert(sons).values(sonsList).returning();
  console.log("New sons created!");

  const gira: typeof giras.$inferInsert = {
    name: "Baianos",
    responsibleId: createdSons[1].id,
  };

  const createdGira = await db.insert(giras).values(gira).returning();
  console.log("New gira created!");

  const assistant: typeof assistance.$inferInsert = {
    name: "John Doe",
    email: "johndoe@email.com",
    address: "Rua aleatória",
    reason: "Espiritualidade",
  };

  const createdAssistant = await db
    .insert(assistance)
    .values(assistant)
    .returning();
  console.log("New assistant created!");

  const frequency: typeof frequencies.$inferInsert = {
    giraId: createdGira[0].id,
    assistanceId: createdAssistant[0].id,
  };

  await db.insert(frequencies).values(frequency);
  console.log("New frequency created!");
}

run().finally(() => client.end());
