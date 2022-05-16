import { FactorialInterface } from './factorial-interface';
import { FactorialLoopStrategy } from './factorial-loop-strategy';
import { FactorialRecursionStrategy } from './factorial-recursion-strategy';
import { FactorialWhileStrategy } from './factorial-while-strategy';
import { FactorialType } from './type-enum';

export class FactorialFactory {
  public static getStrategy(
    type: FactorialType
  ): FactorialInterface | null {
    switch (type) {
      case FactorialType.Loop:
        return new FactorialLoopStrategy();

      case FactorialType.While:
        return new FactorialWhileStrategy();

      case FactorialType.Recursion:
        return new FactorialRecursionStrategy();
    }
    return null;
  }
}
