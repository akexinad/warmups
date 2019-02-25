$(document).ready(function () {
  const word = $('#words').text().split(/[ ,.;"'\n\-]+/);

  const $body = $('body');

  const random = function (max) {
    return Math.floor(Math.random() * max);
  }

  const putWord = function() {
    const randomIndex = random( word.length );
    const text = word[randomIndex];
    const $div = $('<div> class="word">').html(text);
    $div.append($body)
    $div.css({
      top: random(window.innerHeight) + 'px',
      left: random(window.innerWidth) + 'px',
      fontSize: (40 + random(80)) + 'px',
      color: `rgb${random(255)}, ${random(255)}, ${random(255)})`,
      transform: `rotate(${random(360)}deg)`
    })
    $div.append($body);

    $div.fadeIn(1000).fadeOut(2000, function () {
      $(this).remove();
    })
  }

  setInterval(putWord, 1000);

});


// This is called REGULAR EXPRESSION. It will remove all spaces and punctuation when you split the array

$('#words').text().split(/[ ,.;"'\n\-]+/)
