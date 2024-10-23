import { sonsUseCase } from "../internal/use-cases/sons.usecase";

export async function GET() {
  return await sonsUseCase.GetAll();
}
