// Prime Factors
// A prime number is any number greater than one that is only divisible by itself.
//
// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2).
// The prime factors of an integer are the set of prime numbers that will divide the integer exactly.
//
// Example
// What are the prime factors of 60?
//
// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 60), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5
// You can check this yourself:
//
// 2 * 2 * 3 * 5
// = 4 * 15
// = 60
// Success!
// YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// const primeNumbers = (num) => {
//   let primeFatcors = [];
//
//   for (let i = 2; i <= num; i++) {
//     console.log("i= ", i);
//
//     while (num % i === 0) {
//
//       primeFatcors.push(i);
//
//       console.log("found factor: ", i, "prime numbers array", primeFatcors);
//
//       num = num / i;
//
//       console.log("out of while loop, now test i <= num", i, num);
//
//     }
//   }
//
//   return primeFatcors;
//
// }

// console.log(primeNumbers(60));


// VERSION 2.0

const prime = {
  // all the numbers within the range of 1 to 60
  ranges: [],

  // all the numbers within the range
  primeRange: [],

  // the prime numbers that also factors of the input
  primeFactorRange: [],

  getRange(num) {
    this.range = [];

    // start at 2, get all numbers between 2 and the given number.
    for (let i = 2; i <= num; i++) {
      this.range.push(i);
    };

    console.log("getRange(this.range): ", this.range);
    // [2...60]

    return this.range;
  },

  getPrimeRange(arr) {
    this.primeRange = [];

    for (let i = 0; i < arr.length; i++) {
      // identify if num is a prime number.
      let isPrime = true;

      // each number iterated over in the array.
      let potentialPrime = arr[i];

      // test potentialPrime to see if it is divisible by any number other than 1 and itself.
      for (let j = 2; j < potentialPrime; j++) {
        if (potentialPrime % j === 0) {
          isPrime = false;
        } // if
      } // for
      if (isPrime === true) {
        this.primeRange.push(potentialPrime);
      } // if
    }
    console.log("primeRange", this.primeRange);
  },

  getPrimeFactors(num) {
    this.primeFactorRange = [];

    let numPrimes = this.getPrimeRange(this.getRange(num));
    console.log("numPrimes: ", numPrimes);

    for (let i = 0; i < numPrimes.length; i++) {

      while (num % numPrimes[i] === 0) {
        this.primeFactorRange.push(numPrimes[i]);

        num = numPrimes[i]
      } // while
    } // for

    console.log("getPrimeFactors(this.primeFactorRange): ", this.primeFactorRange);

    return this.primeFactorRange;
  } // getPrimeFactors
} // prime

console.log(prime.getPrimeFactors(60));
