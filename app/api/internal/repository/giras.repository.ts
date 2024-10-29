import { Gira } from "../entities/gira.entity";
import { CreateGirasRequest } from "../request/giras.request";
import { GetAllGirasResponse } from "../response/giras.response";

export abstract class GirasRepository {
  abstract GetAll(): Promise<GetAllGirasResponse[]>;
  abstract Create(gira: CreateGirasRequest): Promise<Gira>;
}
