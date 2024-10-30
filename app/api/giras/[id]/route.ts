import { Params } from "next/dist/server/request/params";
import { girasUseCase } from "../../internal/use-cases/giras.usecase";

export async function PUT(
	req: Request,
	{ params }: { params: Promise<Params> },
) {
	return await girasUseCase.AddAssistant(req, params);
}
