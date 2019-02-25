const math = {
  squareNumber: function (number) {
    let solution = number ** 2;
    return solution;
  },

  halfNumber: function (number) {
    let solution = number / 2;
    return solution;
  },

  fraction: function (numerator, denominator) {
    let solution = numerator / denominator * 100;
    return solution;
  },

  area: function (radius) {
    let solution = Math.PI * radius ** 2;
    return solution;
  },
};

$(document).ready(function () {

  $('#square-button').on('click', function() {
    const number = Number($('#square-input').val());
    answer = math.squareNumber(number);
    $('body').append(`<p>The square of ${ number } is ${ answer }.</p>`);
  });

  $('#half-button').on('click', function () {
    const number = Number($('#half-input').val());
    answer = math.halfNumber(number);
    $('body').append(`<p>Half of ${ number } is ${ answer }.</p>`);
  });

  $('#percent-button').on('click', function () {
    const numerator = Number($('#percent1-input').val());
    const denominator = Number($('#percent2-input').val());
    answer = math.fraction(numerator, denominator);
    $('body').append(`<p>The percentage of ${ numerator } over ${ denominator } is ${ answer }%.</p>`);
  });

  $('#area-button').on('click', function() {
      const radius = Number($('#area-input').val());
      answer = math.area(radius);
      $('body').append(`<p>The area of a circle with radius ${ radius } is ${ answer } meters squared.</p>`)
  });
  
});
