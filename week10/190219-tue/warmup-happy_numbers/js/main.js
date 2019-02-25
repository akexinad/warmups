// Happy Numbers
// A happy number is defined by the following process:
//
// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.
//
// Task
// Your task is to write a program in Javascript which prints the first 10 happy numbers, starting from 1.
//
// Here are the first 10 happy numbers, for you to compare your output against:
//
// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44


// const happyNumbers = {
//
//   happyNumberList: [],
//
//   getsumOfSquares(num) {
//     let splitNumber = num.toString().split('');
//     let squaredArray = [];
//     let happyNumberList = [];
//
//     const squared = splitNumber.map( num => {
//       let integer = Number(num);
//       let integerSquared = integer ** 2;
//       squaredArray.push(integerSquared);
//     })
//
//     let sum = squaredArray.reduce((a, b) => a + b, 0);
//     return sum
//   },
//
//   makeTheList(num) {
//     if ((this.getsumOfSquares(num) === 10) || (this.getsumOfSquares(num) === 100)) {
//       this.happyNumberList.push(this.num)
//     } else {
//       this.getsumOfSquares(num);
//     }
//   }
//
// }
//
//
// console.log(happyNumbers.makeTheList(13));


const isHappy = (num) => {
  let cycle = {};
  let squareSum = num;
  let count = 0;

  while (true) {
    squareSum = sumOfDigitsSquared(squareSum)
    // console.log("============================");

    // console.log("squareSum", squareSum);

    if (squareSum === 1) {
      return true;
    }

    // console.log("cycle[squareSum]: ", cycle[squareSum]);

    if (cycle[squareSum] === true) {
      return false;
    }

    cycle[squareSum] = true;
    count ++
    // console.log("cycle: ", cycle);
  }
}; // isHappy

const sumOfDigitsSquared = (num) => {
  let sum = 0;
  let numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    sum += +numStr[i] * +numStr[i];
  }

  // while (num > 0) {
  //   digit = num % 10;
  //   sum += digit * digit;
  //   num = (num - digit) / 10;
  // }

  return sum;
}

const generateHappyNumbers = (count) => {
  let found = 0;

  for (var i = 0; found < count; i++) {

    if (isHappy(i)) {
      found ++;
      console.log("found happy number #%d:", found, i);
    }
  }
}


generateHappyNumbers(10);
