import { desc, eq } from "drizzle-orm";
import { db } from "../../database";
import { assistance, frequencies } from "../../database/schema";
import { Assistant } from "../../entities/assistant.entity";
import { AssistanceRepository } from "../assistance.repository";

export class DrizzleAssistanceRepository implements AssistanceRepository {
	async GetAll(): Promise<Assistant[]> {
		const result = await db
			.select()
			.from(assistance)
			.orderBy(desc(assistance.createdAt));
		const assistanceList: Assistant[] = [];
		for (const currentRow of result) {
			const newAssistant = new Assistant({
				id: currentRow.id,
				name: currentRow.name,
				email: currentRow.email,
				address: currentRow.address,
				reason: currentRow.reason,
				type: currentRow.type,
				whoIndicated: currentRow.whoIndicated,
				createdAt: currentRow.createdAt,
			});
			assistanceList.push(newAssistant);
		}
		return assistanceList;
	}

	async GetAssistantFrequencyByGiraId(giraId: string): Promise<Assistant[]> {
		const result = await db
			.select()
			.from(frequencies)
			.innerJoin(assistance, eq(frequencies.assistanceId, assistance.id))
			.where(eq(frequencies.giraId, giraId))
			.orderBy(desc(assistance.createdAt));

		const assistanceList: Assistant[] = [];
		for (const currentRow of result) {
			const newAssistant = new Assistant({
				id: currentRow.assistance.id,
				name: currentRow.assistance.name,
				email: currentRow.assistance.email,
				address: currentRow.assistance.address,
				reason: currentRow.assistance.reason,
				type: currentRow.assistance.type,
				whoIndicated: currentRow.assistance.whoIndicated,
				createdAt: currentRow.assistance.createdAt,
			});
			assistanceList.push(newAssistant);
		}
		return assistanceList;
	}
}
