import { Params } from "next/dist/server/request/params";
import {
	AddAssistantToGiraRequest,
	CreateGirasRequest,
} from "../request/giras.request";
import { GirasService } from "../service/giras.service";

export class GirasController {
	constructor(private readonly girasService: GirasService) { }

	async GetAll() {
		const response = await this.girasService.GetAll();
		return Response.json(response, {
			status: 200,
		});
	}

	async Create(req: Request) {
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

	async AddAssistant(req: Request, params: Promise<Params>) {
		const paramsReq = (await params) as { id: string };
		const body = await req.json();

		let data: AddAssistantToGiraRequest = body;

		try {
			data = new AddAssistantToGiraRequest({
				giraId: paramsReq.id,
				assistantId: body.assistantId,
			});
		} catch (error) {
			return Response.json(error, {
				status: 400,
			});
		}

		try {
			await this.girasService.AddAssistant(data);
			return Response.json(null, {
				status: 200,
			});
		} catch (error) {
			return Response.json(error, {
				status: 500,
			});
		}
	}
}
