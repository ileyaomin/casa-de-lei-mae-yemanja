import { Gira } from "../entities/gira.entity";
import { CreateGirasRequest } from "../request/giras.request";

export abstract class GirasRepository {
  abstract GetAll(): Promise<Gira[]>;
  abstract Create(gira: CreateGirasRequest): Promise<Gira>;
}
