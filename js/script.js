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
const calc = createCalculator(10);
