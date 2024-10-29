import { girasUseCase } from "../internal/use-cases/giras.usecase";

export async function GET() {
  return await girasUseCase.GetAll();
}

export async function POST(req: Request) {
  return await girasUseCase.Create(req);
}

export async function PUT(req: Request) {
  return await girasUseCase.AddAssistant(req);
}
