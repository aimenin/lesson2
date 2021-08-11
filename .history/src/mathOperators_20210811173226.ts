export type ScalarOperationType = (
  firstOperand: number,
  secondOperand: number
) => number;

export const add: ScalarOperationType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand + secondOperand;

export const minus: ScalarOperationType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand - secondOperand;

export const div: ScalarOperationType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand / secondOperand;

export const mul: ScalarOperationType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand * secondOperand;

export const pow: ScalarOperationType = (
  firstOperand: number,
  secondOperand: number
): number => Math.pow(firstOperand, secondOperand);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const mathPriorities: number[] = [1, 2, 3];

const [FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};
