import { Assistant } from "../entities/assistant.entity";

export abstract class AssistanceRepository {
  abstract GetAll(): Promise<Assistant[]>;
  abstract GetAssistantFrequencyByGiraId(giraId: string): Promise<Assistant[]>;
}
