import { desc } from "drizzle-orm";
import { db } from "../../database";
import { giras } from "../../database/schema";
import { Gira } from "../../entities/gira.entity";
import { CreateGirasRequest } from "../../request/giras.request";
import { GirasRepository } from "../giras.repository";

export class DrizzleGirasRepository implements GirasRepository {
  async GetAll(): Promise<Gira[]> {
    const responseInstance = await db
      .select()
      .from(giras)
      .orderBy(desc(giras.createdAt));
    const GIRAS: Gira[] = [];

    for (const currentInstance of responseInstance) {
      GIRAS.push({
        id: currentInstance.id,
        name: currentInstance.name,
        responsible_id: currentInstance.responsibleId,
        createdAt: currentInstance.createdAt,
      });
    }

    return GIRAS;
  }

  async Create(gira: CreateGirasRequest): Promise<Gira> {
    const dataInstance: typeof giras.$inferInsert = {
      name: gira.name,
      responsibleId: gira.responsible_id,
    };

    const [responseInstance] = await db
      .insert(giras)
      .values(dataInstance)
      .returning();

    const createdGira = new Gira({
      id: responseInstance.id,
      name: responseInstance.name,
      responsible_id: responseInstance.responsibleId,
      createdAt: responseInstance.createdAt,
    });

    return createdGira;
  }
}
