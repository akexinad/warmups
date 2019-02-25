/*

Warmup - Raindrops
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
Examples
28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

*/

// const factorials = function (number){
//   if (number % 3 === 0) {
//     console.log("Pling");
//   }
//   else if (number % 5 === 0) {
//     console.log("Plang");
//   }
//   else if (number % 7 === 0) {
//     console.log("Plong");
//   }
//   else if (number % 3 === 0 && number % 5 === 0)
//   else {
//     console.log(`${ number }`);
//   };
// };
//
// factorials(1755);

// const rainDrops = function (number) {
//   let outPut = ''
//   if (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
//     return number;
//   }
//   if (number % 3 === 0) {
//     outPut = console.log(outPut + 'Pling');
//   }
//   if (number % 5 === 0) {
//     outPut = console.log(outPut + 'Plang');
//   }
//   if (number % 7 === 0) {
//     outPut = console.log(outPut + 'Plong');
//   }
// } ;
//
// rainDrops(5);
// rainDrops(28);
// rainDrops(1755);
// rainDrops(34);

// ------------ INSTRUCTOR ANSWER --------------- //

const isAFactor = function(number, factor) {
  return number % factor === 0;
};

const rainDrops = function (number) {
  let string = '';

  if (isAFactor(number, 3)) {
    // string = string + "Pling"
    string += "Pling";
  }
  if (isAFactor(number, 5)) {
    // string = string + "Plang"
    string += "Plang";
  }
  if (isAFactor(number, 7)) {
    // string = string + "Plong"
    string += "Plong";
  }
  if (string.length === 0) {
    string += number;
  }
  return string;
};

console.log(rainDrops(5));
console.log(rainDrops(28));
console.log(rainDrops(1755));
console.log(rainDrops(34));
