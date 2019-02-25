let markov = {};
let beginnings = [];

const bookFileName = "./markov.txt";

// Build our markov chain table by iterating over the given text
const makeMarkov = function(text) {
  // split this string into an array of individual words

  const words = text.split(/[ ;\-\n]+/);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (!markov[word]) {
      markov[word] = [];
    } // if

    let nextWord = words[ i + 1 ];
    markov[word].push(nextWord);

    if (word.match(/^[A-Z][a-z]/)) {
      beginnings.push(word);
    } // if
  } // for
};

// Helper function to return a random integer between 0 and max
const randy = function(max) {
  return Math.floor(Math.random() * max);
};

// Helper function to return a random element from the given array
const choose = function(arr) {
  return arr[randy(arr.length)];
};

// Generate a new string from our markov chain of the the specified length.
// we can keep using the same markov chain lookup we created to generated as much new text as we want, and it will have all the same statistical relation to the original text.

const generate = function(length) {
  let next = choose(beginnings);
  let putput = next;

  for (let i = 0; i < length; i++) {
    let word = choose(markov[next]);
    output += " " + word;
    next = word;
  }; // for
  return output;
}

$(document).ready(function() {

  // now we load our text file over ajax
  // NOTE: for this to work you will have to run a server on your PC,
  // i.e. by typing the commands 'python -m SimpleHTTPServer' in this folder

  $.ajax(bookFileName)
  .done(function(response) {
    // console.log(response);

    // When our text is loaded, pass it to our markov-generating function.
    makeMarkov(response);

    //Having constructed our markov chian lookup table, use it to generate some new text!
    let nextText = generate(60);

    let $el = $('<p>').text(nextText);
    $('#output').append($el)
  })
  .fail(function(error) {
    console.error("ERROR! >>>> ", error)
  })

  // Listen for keypresses, and generate new text when enter is pressed.
  $(document).keypress(function(e) {
    if (e.keyCode === 13) {
      console.log(e);
      let nextText = generate(60);
      let $el = $('<p>').text(nextText);
      $('#output').append($el);
    }
  });

});
