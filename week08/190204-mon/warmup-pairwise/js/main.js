// Pairwise
// Given an array, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//
// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
//
// For example, pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
//
// Index	0	 1	 2	 3	 4
// Value	7	 9	11	13	15
// Below we will take their corresponding indices and add them.
//
// 7 + 13 = 20 => Indices 0 + 3 = 3
// 9 + 11 = 20 => Indices 1 + 2 = 3
// 3 + 3 = 6 => Return 6


/////////////////////////////////////////////////////////////
////////////////// YANNI'S ANSWER ///////////////////////////
/////////////////////////////////////////////////////////////

// [7, 9, 11, 13, 15]
//
// const pairwise = (arr, sum) => {
//   let result = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         result += i + j;
//
//         arr[i] = "";
//         arr[j] = "";
//       }
//     }
//   }
//   return result;
// }
//
// console.log(pairwise([7, 9, 11, 13, 15], 20));

/////////////////////////////////////////////////////////////
////////////////// YANNI'S ANSWER ///////////////////////////
/////////////////////////////////////////////////////////////

const pairwise = (arr, sum) => {
  const result = arr.reduce((acc, cur, index) => {
    let theOtherElement = sum - cur;

    if ((arr.indexOf(theOtherElement) !== -1) && arr.indexOf(theOtherElement) !== index) {
      let total = index + arr.indexOf[theOtherElement];

      arr.splice(arr.indexOf(theOtherElement), 1, NaN);
      arr.splice(index, 1, NaN);
      return acc + total
    }
    return acc;
  }, 0)
  return result;
}

console.log(pairwise([7, 9, 11, 13, 15], 20));
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
