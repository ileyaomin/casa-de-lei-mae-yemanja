import { AssistanceController } from "../controller/assistance.controller";
import { DrizzleAssistanceRepository } from "../repository/implements/drizzleAssistance.repository";
import { AssistanceService } from "../service/assistance.service";

const assistanceRepositoryInstance = new DrizzleAssistanceRepository();
const assistanceServiceInstance = new AssistanceService(
	assistanceRepositoryInstance,
);
const assistanceControllerInstance = new AssistanceController(
	assistanceServiceInstance,
);

export const assistanceUseCase = assistanceControllerInstance;
