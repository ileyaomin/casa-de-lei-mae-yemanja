import { girasUseCase } from "../internal/use-cases/giras.usecase";

export async function POST(req: Request, res: Response) {
  return await girasUseCase.Create(req, res);
}
