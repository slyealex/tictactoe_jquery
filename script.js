$(document).on('ready', function() {
  var turn = 0;
  // Idempotent
  // Memoization
  var self = $(this);
  var winningCombos = [[1, 2, 3],[4, 5, 6], [7, 8, 9]]; // top816, mid357, bot492 === 15

  $('td').hover(
    function() {
    self.addClass('hover');
  }, function() {
    self.removeClass('hover');
  }
  );

  $('td').on('click', function() {
    // this === DOM element
    // $(this) === jQuery element


    if (turn % 2) {
      self.html('O').addClass('o');
    } else {
      self.html('X').addClass('x');
    }

    self.off('click');

    checkForWinner();

    turn++;

  });

  function checkForWinner() {
    // $('.x')
  }

});
