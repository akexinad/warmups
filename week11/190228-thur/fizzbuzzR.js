const fizzbuzzR = function (num) {
  if (num % 7 === 0) {
    console.log("fizzbuzz");
  } else if (num % 6 === 0) {
    console.log("buzz");
  } else if (num % 2 === 0) {
    console.log("fizz");
  } else if (num < 0) {
    return
  }

  fizzbuzzR(num - 1);
};

fizzbuzzR(2000)
