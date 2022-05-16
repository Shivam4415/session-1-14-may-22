import { FactorialInterface } from './factorial-interface';

export class FactorialWhileStrategy implements FactorialInterface {
  calculate(): any {
    return 0;
  }
  print(data: number): void {
    console.log(data);
  }
}
