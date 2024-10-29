import { GirasRepository } from "../repository/giras.repository";
import {
  AddAssistantToGiraRequest,
  CreateGirasRequest,
} from "../request/giras.request";

export class GirasService {
  constructor(private readonly girasRepository: GirasRepository) {}

  async GetAll() {
    const response = await this.girasRepository.GetAll();
    return response;
  }

  async Create(data: CreateGirasRequest) {
    const response = await this.girasRepository.Create({
      name: data.name,
      responsible_id: data.responsible_id,
    });

    return response;
  }

  async AddAssistant(data: AddAssistantToGiraRequest) {
    await this.girasRepository.AddAssistant(data);
    return;
  }
}
