import { RiskFactorParamController } from "./controller";

export class RiskFactorParamsRoutes {
  public static routes(router: any) {
    router.get("/factorial/:type", RiskFactorParamController.calculate);
  }
}
