import { db } from "../../database";
import { sons } from "../../database/schema";
import { Son } from "../../entities/son.entity";
import { SonsRepository } from "../sons.repository";

export class DrizzleSonsRepository implements SonsRepository {
  async GetAll(): Promise<Son[]> {
    const responseInstance = await db.select().from(sons);
    const SONS: Son[] = [];

    for (const currentInstance of responseInstance) {
      SONS.push({
        id: currentInstance.id,
        name: currentInstance.name,
        it_answer: currentInstance.itAnswer,
        createdAt: currentInstance.createdAt,
      });
    }

    return SONS;
  }
}
