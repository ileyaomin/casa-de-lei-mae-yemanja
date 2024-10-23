import { Son } from "../entities/son.entity";

export abstract class SonsRepository {
  abstract GetAll(): Promise<Son[]>;
}
