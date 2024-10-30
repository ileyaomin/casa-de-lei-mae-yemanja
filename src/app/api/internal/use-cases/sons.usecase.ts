import { SonsController } from "../controller/sons.controller";
import { DrizzleSonsRepository } from "../repository/implements/drizzleSons.repository";
import { SonsService } from "../service/sons.service";

const sonsRepositoryInstance = new DrizzleSonsRepository();
const sonsServiceInstance = new SonsService(sonsRepositoryInstance);
const sonsControllerInstance = new SonsController(sonsServiceInstance);

export const sonsUseCase = sonsControllerInstance;
