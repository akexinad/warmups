console.log("ciao mondo");

/*

Leap Year Warmup Exercise
Do this in HTML and JS!

Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

Every year that is evenly divisible by 4
Except if it is evenly divisible by 100...
Unless it is also divisible by 400
Test Data... Make sure it is working!

1997 is not a leap year, it should return false
1996 is a leap year, it should return true
1900 is not a leap year, it should return false
2000 is a leap year, it should return true
How to structure it...

We want a custom function called isLeapYear
Bonus!

Ask the user what number they want to test
Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

*/

// function leapYear(year){
//    var result;
//    year = parseInt(document.getElementById("isYear").value);
//    if (years/400){
//      result = true
//    }
//    else if(years/100){
//      result = false
//    }
//    else if(years/4){
//      result= true
//    }
//    else{
//      result= false
//    }
//    return result
// }

// const hasFour = function(number) {
//   return number.toString().length;
// };
//
// console.log(hasFour(1234));

// function calculate() {
// var myBox1 = document.getElementById('box1').value;
// var myBox2 = document.getElementById('box2').value;
// var result = document.getElementById('result');
// var myResult = box1 * box2 ;
// result.innerHTML = myResult;

// const isLeapYear = function (year) {
//   if ((year % 4 === 0 && year % 4 !== 100) || year % 400 === 0) {
//     return 'leap year it is'
//   } else {
//     return 'no'
//   }
// };


// console.log(isLeapYear(2004));
// console.log(isLeapYear(2008));
// console.log(isLeapYear(2009));
// console.log(isLeapYear(4));

const resultBox = function () {
  const myBox1 = document.getElementById('box1').value;
  const result = document.getElementById('result').value;
  const myResult = function (box1) {
    if ((year % 4 === 0 && year % 4 !== 100) || year % 400 === 0) {
      return 'leap year it is'
    } else {
      return 'no'
    }
  }
  result.innerHTML = myResult;
};


/*
--------------
LINNA'S ANSWER
--------------
*/

// const isLeapYear = function (year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       }
//
//       return false;
//     }
//
//     return true;
//   }
//
//   return false;
// };
//
// console.log(isLeapYear(1996));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2001));
// console.log(isLeapYear(1999));

const isDivisibleBy = function(num, divisor) {
  return num % divisor === 0;
}

const isLeapYear2 = function (year) {
  if (( isDivisibleBy(year, 4) && isDivisibleBy(year, 100)) || isDivisibleBy(year, 400)) {
    return ` ${ year } is leap year.`
  } else {
    return `${ year } is not leap year`
  }
}

const year = prompt("Please enter a year.")
console.log(isLeapYear2(year));
