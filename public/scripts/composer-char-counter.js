$(document).ready(function() {

  $("#tweet-text").on("keyup", function(event) {
    console.log('hello')
    const $maxChars = 140;
    console.log($maxChars)
    let $counter = $(".counter");
    let $currentChars = $(this).val().length;
    let $remainingChars = $maxChars - $currentChars;
    console.log($remainingChars)
    $counter.val($remainingChars)
    if ($remainingChars <= 0) {
      $counter.css("color", "red")
    } else {
      $counter.css("color", "black")
    }
  });
});

