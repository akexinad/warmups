// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions
// reverse
// flatten
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// Hint: You're going to need to be looping through the arrays to get a solution.

class Functions {

  constructor(array) {
    this.array = array
  };

  reverse() {
    let reverseArray = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      reverseArray.push(this.array[i]);
    }
    console.log(reverseArray);
  };

  flatten() {
    let flatArray = [];
    for (let i = 0; i < this.array.length; i++) {
      if (typeof(this.array[i]) === "object" ) {
        return;
      } else if (typeof(this.array[i]) === "string" || typeof(this.array[i] === "number")) {
        flatArray.push(this.array[i])
      }; //if
      return flatArray;
    }; // for
    console.log(flatArray);
  }; // object

  //
  // flatten() {
  //   let flatArray = [];
  //   for (let i = 0; i < this.array.length; i ++) {
  //     if ( typeof( this.array[i] ) === "object" ) {
  //       return;
  //     } else if ()
  //   }
  // }

};


// const arrayTest = new Functions([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// arrayTest.reverse();
//
// const flatMe = new Functions(["Hello", ["World", 42] ]);
// flatMe.flatten();

/////////////////////////////////////////////////////////////
////////////////// YANNI'S ANSWER ///////////////////////////
/////////////////////////////////////////////////////////////

// const arrReverse = ["one", "two", "three", "four"];
//
// const reverse = function (array) {
//   let reversed = [];
//
//   for (var i = 0; i < array.length; i ++) {
//     reversed.unshift(array[i]);
//   }
//   //
//   // for (let i = array.length - 1; i >= 0; i --) {
//   //   reverse.push(array[i]);
//   // }
//
//   console.log(reversed);
// }
//
// reverse(arrReverse);
//
// const arrFlatten = ["one", "two", ["a", "b", "c"]];
//
// const flatten = (array) => {
//   let flatten = [];
//
//   for (let i = 0; i < array.length; i++) {
//     let currentElem = array[i];
//     // console.log(currentElem);
//
//     if ( currentElem instanceof Array ) {
//     // if (currentElem.constructor === Array) {
//       for (let j = 0; j < currentElem.length; j++) {
//         console.log(currentElem[j]);
//         flatten.push(currentElem[j])
//       }
//     } else {
//       flatten.push(currentElem);
//     }
//   }
//   console.log(flatten);
// }
//
// flatten(arrFlatten);


/////////////////////////////////////////////////////////////
////////////////// YANNI'S ANSWER 2.0 ///////////////////////////
/////////////////////////////////////////////////////////////


const arrFlatten = ["one", "two", ["a", "b", "c"]];

flatten = array => {
  array = array + "";
  array = array.split(",")
  console.log(array);
}

flatten(arrFlatten);
