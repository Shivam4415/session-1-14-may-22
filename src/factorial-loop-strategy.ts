import { FactorialInterface } from './factorial-interface';
import { FactorialType } from './type-enum';

export class FactorialLoopStrategy implements FactorialInterface {
  calculate(n: number): any {
    let fact = 1;
    for (let i = 1; i < n; i++) {
      fact *= i;
    }
    const d = {
      r: fact,
      type: FactorialType.Loop,
    };
    return d;
  }
  print(data: number): void {
    throw new Error('Method not implemented.');
  }
}
