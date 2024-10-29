import { desc, eq } from "drizzle-orm";
import { db } from "../../database";
import { giras, sons } from "../../database/schema";
import { Gira } from "../../entities/gira.entity";
import { CreateGirasRequest } from "../../request/giras.request";
import { GirasRepository } from "../giras.repository";
import { GetAllGirasResponse } from "../../response/giras.response";

export class DrizzleGirasRepository implements GirasRepository {
  async GetAll(): Promise<GetAllGirasResponse[]> {
    const responseInstance = await db
      .select()
      .from(giras)
      .innerJoin(sons, eq(giras.responsibleId, sons.id))
      .orderBy(desc(giras.createdAt));
    const GIRAS: GetAllGirasResponse[] = [];

    for (const currentInstance of responseInstance) {
      GIRAS.push({
        id: currentInstance.giras.id,
        name: currentInstance.giras.name,
        son: currentInstance.sons.name,
        createdAt: currentInstance.giras.createdAt,
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
