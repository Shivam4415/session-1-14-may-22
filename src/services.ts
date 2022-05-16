import { FactorialFactory } from "./factorial-factory";
import { FactorialType } from "./type-enum";

export class RiskFactorParamServices {
  public static factorial(type: FactorialType): any {
    const obj = FactorialFactory.getStrategy(type);
    if (obj == null) {
      throw new Error("Strategy Not Found");
    }
    const result = obj.calculate(10);
    return result;
  }
}
