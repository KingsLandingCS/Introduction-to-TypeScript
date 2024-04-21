function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): undefined {
    console.log('Result: ' + num);
    return;
}

console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number;

let combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));



