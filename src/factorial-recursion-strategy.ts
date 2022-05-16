import { FactorialInterface } from './factorial-interface';
import { FactorialType } from './type-enum';

export class FactorialRecursionStrategy implements FactorialInterface {
  public res: any = {};
  calculate(n: number): any {
    if (n == 1) {
      return 1;
    }
    const d = this.calculate(n - 1) * n;
    this.res.data = d;
    this.res.type = FactorialType.Recursion;
  }
  print(data: number): void {
    throw new Error('Method not implemented.');
  }
}
