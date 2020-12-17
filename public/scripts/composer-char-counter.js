$(document).ready(function() {

  $("#tweet-text").on("keyup", function(event) {
    const maxChars = 140;
    let counter = $("#counter");
    let currentChars = this.value.length;
    let remainingChars = maxChars - currentChars;
    if (remainingChars <= 0) {
      counter.style.color = "red";
      event.preventDefault();
    } else {
      counter.style.color = "#545149";
    }
  });
});

