import { db } from "../../database";
import { giras } from "../../database/schema";
import { Gira } from "../../entities/gira.entity";
import { CreateGirasRequest } from "../../request/giras.request";
import { GirasRepository } from "../giras.repository";

export class DrizzleGirasRepository implements GirasRepository {
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
