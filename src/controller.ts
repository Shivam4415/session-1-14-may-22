import { Context } from "koa";
import { RiskFactorParamServices } from "./services";

export class RiskFactorParamController {
  public static calculate(ctx: Context) {
    const type = ctx.params.type;
    const result = RiskFactorParamServices.factorial(type);
    ctx.body = {
      success: true,
      ...{ result },
    };
  }
}
