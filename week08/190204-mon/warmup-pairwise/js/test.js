// function combinations(numArr, choose, callback) {
//     var n = numArr.length;
//     var c = [];
//     var inner = function(start, choose_) {
//         if (choose_ == 0) {
//             callback(c);
//         } else {
//             for (var i = start; i <= n - choose_; ++i) {
//                 c.push(numArr[i]);
//                 inner(i + 1, choose_ - 1);
//                 c.pop();
//             }
//         }
//     }
//     inner(0, choose);
// }

const test = function(arr, choose, callback) {
  var n = arr.length;
  var c = [];
  var inner = function(start, choose_) {
    if (choose_ == 0) {
      callback(c);
    } else {
      for (let i = start: i <= n - choose_; ++i) {
        c.push(arr[i]);
      }
    }
  }
}
