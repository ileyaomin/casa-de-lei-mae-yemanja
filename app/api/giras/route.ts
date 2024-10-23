import { girasUseCase } from "../internal/use-cases/giras.usecase";

export async function POST(req: Request) {
  return await girasUseCase.Create(req);
}
