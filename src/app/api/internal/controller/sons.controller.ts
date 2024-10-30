import { SonsService } from "../service/sons.service";

export class SonsController {
  constructor(private readonly sonsService: SonsService) {}

  async GetAll() {
    const sons = await this.sonsService.GetAll();
    return Response.json(sons, {
      status: 200,
    });
  }
}
