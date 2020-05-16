export interface Pair {
    a: number;
    b: number;
}

export class Calculator {
    multiply(props: Pair): number {
        return props.a * props.b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }
}

const calculator = new Calculator();

console.log(
    calculator.multiply({a: 5, b: 5})
);

console.log(
    calculator.divide(10, 2)
);