console.log('la volonta` costa niente');

/*

Badger's Revenge
The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week (just make up the numbers);
Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

*/

////////// USE A FACTORY //////////////////////////

// const clappingBadger = function (nme, clp) {
//   return {
//     name: nme,
//     clapCount: clp,
//     }
// };
//
// const revengeOfBadger = [
//   clappingBadger('david', 2),
//   clappingBadger('anne', 4),
//   clappingBadger('michael', 1),
//   clappingBadger('kelly', 29),
// ];
//
// const claps = Object.values( revengeOfBadger.clapCount );
// console.log(claps);
//
//
// //////////////////////// OR A CONSTRUCTOR //////////////////////////
//
// const ClappingBadger = function (nme, clp) {
//   this.name = nme;
//   this.clapCount = clp;
// }
//
// const david = new ClappingBadger('david', 2);


///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// LINNA'S ANSWER //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

const revengeOfBadger = {
  students: {
    "alex": 1,
    "bob": 2,
    "charlie": 3,
    "daisy": 4,
    "ella": 5
  },
  shortList: [],
  getStudentList: function () {
    this.shortList = [];
    for (let key in this.students) {
      if (this.students[key] > 2) {
        this.shortList.push(key);
      }
    } /// for
    console.log(this.shortList);
    return this.shortList.length;
  },
  draw: function () {
    let winner = "Badger";
    let numberOfCandidates = this.getStudentList(); // 3
    if (numberOfCandidates > 0) {
      let randy = Math.floor(Math.random() * numberOfCandidates);
      winner = this.shortList[randy];
    } // if

    return `winner is ${ winner }.`
  }
};
