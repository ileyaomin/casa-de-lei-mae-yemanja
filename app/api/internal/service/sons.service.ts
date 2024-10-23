import { Son } from "../entities/son.entity";
import { SonsRepository } from "../repository/sons.repository";

export class SonsService {
  constructor(private readonly sonsRepository: SonsRepository) {}

  async GetAll(): Promise<Son[]> {
    return await this.sonsRepository.GetAll();
  }
}
