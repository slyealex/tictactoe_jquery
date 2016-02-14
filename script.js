$(document).on('ready', function() {
  var turn = 0;
  // Idempotent
  // Memoization
  var self = $(this);



  // Hover to change box color
  $('td').hover(
    function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  }
  );


  // Click event to handle class adding and prevent further events
  // on same table box
  $('td').on('click', function() {
    // this === DOM element
    // $(this) === jQuery element

    if (turn % 2 === 1) {
      $(this).html('O').addClass('o');
    } else {
      $(this).html('X').addClass('x');
    }

    $(this).off('click');

    checkForWinner();

    turn++;

  });



  function checkForWinner() {
      var xBox = $('.x');
      var oBox = $('.o');


      for (var i = 0; i < xBox.length; i++) {
        for (var j = i + 1; j < xBox.length; j++) {
          for (var k = j + 1; k < xBox.length; k++) {
            if (parseInt(xBox[i].id) + parseInt(xBox[j].id) + parseInt(xBox[k].id) === 15) {
              alert("X is the Winner.");
              resetGame();
            }
          }
        }
      }
      for (var i = 0; i < oBox.length; i++) {
        for (var j = i+1; j < oBox.length; j++) {
          for (var k = j+1; k < oBox.length; k++) {
            if (parseInt(oBox[i].id) + parseInt(oBox[j].id) + parseInt(oBox[k].id) === 15) {
              alert("O is the Winner.");
              resetGame();
            }
          }
        }
      }
    }

    

    function resetGame() {
      result = window.confirm("Another game perhaps?");
      if (result === true) {
        location.reload();
      }
    }



});
