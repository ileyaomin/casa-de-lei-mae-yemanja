import { assistanceUseCase } from "../internal/use-cases/assistance.usecase";

export async function GET() {
	return await assistanceUseCase.GetAll();
}
