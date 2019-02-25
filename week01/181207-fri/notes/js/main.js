// OBJECTS ARRAYS AND FUNCTIONS

  // ARRAY ACCESS AND ASSIGNMENTS



const classes = [];
//> undefined

classes[0] = 'HTML 101' // adding first item on the list
//> "HTML 101"

classes[1] // adds second item

classes.pop() // removes the last item in the array.
//> shows the last item

classes.push() // adds item at the end of the array.

const i = 0;
classes[i]; // will retrieve first element in the list.



  // ITERATION


for (let i = 0; i < classes.length; i++) {
  console.log(classes[ i ]);
};

// This will log the index number AND the item.


  // OBJECT ASSIGNMENT


let angelTheCat = {furcolor: 'orange'};    // assign a new key and value.


const furVariable = angelTheCat.furColor;
//> orange

angelTheCat.furColor = 'grey';


furVariable; // will still return orange.


console.table( object ); //puts the object in a table in the console.

  // OBJECT ITERATION

//turning the keys or values in an array.
Object.keys( obj );
Object.values( val );


for (let key in zoo) {
  console.log( key, zoo[key] );
}

  // NESTED OBJECTS

const doll = { innerDoll: {} };

op
