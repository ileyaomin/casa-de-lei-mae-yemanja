import { Assistant } from "../entities/assistant.entity";
import { AssistanceRepository } from "../repository/assistance.repository";

export class AssistanceService {
	constructor(private readonly assistanceRepository: AssistanceRepository) { }

	async GetAll(): Promise<Assistant[]> {
		return await this.assistanceRepository.GetAll();
	}

	async GetAssistantFrequencyByGiraId(giraId: string): Promise<Assistant[]> {
		return await this.assistanceRepository.GetAssistantFrequencyByGiraId(
			giraId,
		);
	}
}
