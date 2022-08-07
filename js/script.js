"use strict";

// // 1
// function sumTwoSmallestNumbers(...array) {
//   if (array.length < 2) {
//     console.error("Please, enter two numbers or more");
//     return;
//   }
//   const sortedArray = array.sort((a, b) => a - b);
//   return sortedArray[0] + sortedArray[1];
// }

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

// 2
function createCalculator() {
  return function (operator, b) {
    const operations = {
      sum: (a, b) => a + b,
      mult: (a, b) => a * b,
      sub: (a, b) => a - b,
      div: (a, b) => a / b,
    };
    const operationFn = operations[operator];
    const calcResult = operationFn(a, b);
    return calcResult;
  };
}

const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
