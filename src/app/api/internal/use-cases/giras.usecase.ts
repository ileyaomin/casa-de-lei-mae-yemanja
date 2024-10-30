import { GirasController } from "../controller/giras.controller";
import { DrizzleGirasRepository } from "../repository/implements/drizzleGiras.repository";
import { GirasService } from "../service/giras.service";

const girasRepositoryInstance = new DrizzleGirasRepository();
const girasServiceInstance = new GirasService(girasRepositoryInstance);
const girasControllerInstance = new GirasController(girasServiceInstance);

export const girasUseCase = girasControllerInstance;
