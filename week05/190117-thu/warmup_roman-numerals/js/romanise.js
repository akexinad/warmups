const romanise = function (arabicNumeral) {
  const romanObject = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    5: "V",
    4: "IV",
    1: "I"
  };

  let romanNumeral = '';

  for (let index of Object.keys(romanObject)) {
    while ( arabicNumeral > index ) {
      console.log(`Roman numeral is now ${ romanNumeral }`);
      romanNumeral += romanObject[ index ];
      console.log(`Arabic numeral is now ${ arabicNumeral }`);
      arabicNumeral -= index;
    }; // while loop
  }; // for loop
  return romanNumeral;
  console.log(romanNumeral);
}; // function


romanise(1990);



// let integer = Math.floor(arabicNumeral / numberObject[ index ]);
// console.log("========================================================================================");
// console.log(`The Arabic numeral in question is ${ 1990 }. Divided by the VALUE of ${ numberObject [ index ] } of the index ${ index } of the number Object gives you ${ arabicNumeral / numberObject[ index ] }. And then apply Math.floor will give you the single INTEGER ${ Math.floor(arabicNumeral / numberObject[ index ]) }`);
// console.log("========================================================================================");
//
// arabicNumeral -= integer * numberObject[ index ];
//
// romanNumeral += index.repeat( integer );


// M: 1000,
// CM: 900,
// D: 500,
// CD: 400,
// C: 100,
// XC: 90,
// L: 50,
// XL: 40,
// X: 10,
// IX: 9,
// V: 5,
// IV: 4,
// I: 1
