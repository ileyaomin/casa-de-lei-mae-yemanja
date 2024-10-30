import { GetAllAssistanceResponse } from "../response/assistance.response";
import { AssistanceService } from "../service/assistance.service";

export class AssistanceController {
	constructor(private readonly assistanceService: AssistanceService) { }

	async GetAll() {
		try {
			const response = await this.assistanceService.GetAll();
			const assistance: GetAllAssistanceResponse[] = [];

			for (const currentResponse of response) {
				const assistanceInstance = new GetAllAssistanceResponse({
					id: currentResponse.id as string,
					name: currentResponse.name,
				});
				assistance.push(assistanceInstance);
			}
			return Response.json(assistance, {
				status: 200,
			});
		} catch (error) {
			return Response.json(error, {
				status: 500,
			});
		}
	}
}
