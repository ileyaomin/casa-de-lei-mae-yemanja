import { client, db } from ".";
import { fakerPT_BR as faker } from "@faker-js/faker";
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
			name: "Franklin",
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

	const assistanceList: (typeof assistance.$inferInsert)[] = [];

	for (let cont = 1; cont <= 5; cont++) {
		const assistantInstance: typeof assistance.$inferInsert = {
			name: faker.person.firstName(),
			email: faker.internet.email(),
			address: faker.location.streetAddress(),
			reason: "Espiritualidade",
		};
		assistanceList.push(assistantInstance);
	}

	const createdAssistant = await db
		.insert(assistance)
		.values(assistanceList)
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
