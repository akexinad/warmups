// Phone Number Check
// The rules for a valid phone number in this exercise are as follows:
//
// If the phone number has any non-numerals in it, they should be removed/ignored
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
// If the phone number is 11 digits and the first number is not 1, then it is an invalid number
// If the phone number is 10 digits long, it is valid; if not, it is invalid
// Exercise
// Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed), or if not valid, returns '00000000' (ten zeroes)
// Write a Javascript function which returns a formatted version of the given phone number, ie:
// Input:  11234567890
// Output: (123) 456-7890
// I.e., the first 3 numbers are the area code, and are in brackets;
// then comes a space, then the next 3 numbers (the exchange code),
// followed by a dash, then then the last four numbers.

// console.log('hello');
//
// const numberA = "11234567890";
// const numberB = "21345678900";
// const numberC = "1123456A-90";
//
// class PhoneNumberCheck {
//   constructor(number) {
//     number = this.number;
//   };
//
//   checkNumber() {
//     if (typeof(number) !== "number") {
//       console.log("0000000000");
//       return
//     } else if (number.toString()[0] !== 1) {
//       console.log("0000000000");
//       return
//     } else if ( number.toString().slice(1).length !== 10 ) {
//       console.log("0000000000");
//       return
//     } else {
//       const newNumber = number.toString().match(/^(\d{3})(\d{3})(\d{4})$/);
//     } return newNumber
//   }
//
// };
//
//
// const checkNumber = function(number) {
//   if (typeof(number) !== "number") {
//     console.log("0000000000");
//     return
//   } else if (number.toString()[0] !== "1") {
//     console.log("0000000000");
//     return
//   } else if ( number.toString().slice(1).length !== 10 ) {
//     console.log("0000000000");
//     return
//   } else {
//     const newNumber = number.match(/^(\d{3})(\d{3})(\d{4})$/);
//     console.log(newNumber);
//   }
//   return newNumber;
// }
//
// checkNumber(numberA);


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// YANNI'S ANSWER //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


const phoneNumber = {
  cleanNumber: function (num) {
    let cleaned = [];
    let numerals = "0123456789";

    for (let i = 0; i < num.length; i++) {
      let currentNum = num[i];
      if (numerals.indexOf(currentNum) !== -1) {
        cleaned.push(currentNum);
      } // if
    } // for
    cleaned = cleaned.join("");
    console.log(cleaned);

    if ((cleaned.length == 11) && (cleaned[0] === "1")) {
      return cleaned.substr(1);
    } else {
      return cleaned;
    }
  },

  isValid: function (num) {
    let cleaned = this.cleanNumber(num);

    if (cleaned.length !== 10) {
      return "0000000000";
    } else {
      return cleaned;
    }

  },

  getFormattedNumber: function (num) {
    let cleaned = this.cleanNumber(num);

    let areaCode = cleaned.substr(0, 3);
    let exchangeCode = cleaned.substr(3, 3);
    let remaining = cleaned.substr(6);

    return `(${ areaCode }) ${ exchangeCode }-${ remaining}`
  },

};

const num1 = "112345s67*as123";

console.log(phoneNumber.cleanNumber(num1));
console.log(phoneNumber.isValid(num1));
console.log(phoneNumber.getFormattedNumber(num1));
