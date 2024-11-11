import { Params } from "next/dist/server/request/params";
import { assistanceUseCase } from "../../internal/use-cases/assistance.usecase";

export async function GET(
	req: Request,
	{ params }: { params: Promise<Params> },
) {
	return await assistanceUseCase.GetAllAssistanceByGiraId(req, params);
}
