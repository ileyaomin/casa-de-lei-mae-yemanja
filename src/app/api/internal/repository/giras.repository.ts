import { Gira } from "../entities/gira.entity";
import {
  AddAssistantToGiraRequest,
  CreateGirasRequest,
} from "../request/giras.request";
import { GetAllGirasResponse } from "../response/giras.response";

export abstract class GirasRepository {
  abstract GetAll(): Promise<GetAllGirasResponse[]>;
  abstract Create(gira: CreateGirasRequest): Promise<Gira>;
  abstract AddAssistant(data: AddAssistantToGiraRequest): Promise<void>;
}
