import { GirasRepository } from "../repository/giras.repository";
import { CreateGirasRequest } from "../request/giras.request";

export class GirasService {
  constructor(private readonly girasRepository: GirasRepository) {}

  async Create(data: CreateGirasRequest) {
    const response = await this.girasRepository.Create({
      name: data.name,
      responsible_id: data.responsible_id,
    });

    return response;
  }
}
