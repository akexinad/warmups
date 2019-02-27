console.log('ciao');

/*

Text Soup
Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.

Hints:
Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg; paste the text into a hidden <div> element in your HTML file, and use jQuery to get the contents of the div.
Bonus:
Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
Try random colours, random font sizes, rotation, whatever floats your boat.

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

*/


const textSoup = {
  randomise: function (text) {
    let textArray = text.split(" ");
    for (let i = textArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [textArray[i], textArray[j]] = [textArray[j], textArray[i]];
    }
    return textArray[4];
  }
};


$(document).ready(function () {
  $('#randomise-button').on('click', function () {
    let $text = $('#hidden-text').text();
    let magicWord = textSoup.randomise($text);
    $('#magic-word').append(magicWord).text();
  });

});
