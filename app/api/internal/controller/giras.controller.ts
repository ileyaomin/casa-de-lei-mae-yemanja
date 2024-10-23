import { CreateGirasRequest } from "../request/giras.request";
import { GirasService } from "../service/giras.service";

export class GirasController {
  constructor(private readonly girasService: GirasService) {}

  async Create(req: Request, res: Response) {
    const body = await req.json();

    let data: CreateGirasRequest = body;

    try {
      data = new CreateGirasRequest(body);
    } catch (error) {
      return Response.json(error, {
        status: 400,
      });
    }

    const response = await this.girasService.Create(data);

    return Response.json(response, {
      status: 201,
    });
  }
}
