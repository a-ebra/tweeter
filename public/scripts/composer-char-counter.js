$(document).ready(function() {

  $("#tweet-text").on("keyup", function(event) {
    const $maxChars = 140;
    let $counter = $(".counter");
    let $currentChars = $(this).val().length;
    let $remainingChars = $maxChars - $currentChars;
    $counter.val($remainingChars)
    if ($remainingChars <= 0) {
      $counter.css("color", "red")
    } else {
      $counter.css("color", "black")
    }
  });
});

