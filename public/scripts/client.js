/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // escape helper fx

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//generate dom structure for tweet from given obj
const createTweetElement = function(tweet) {

  const time = moment(tweet.created_at).fromNow()
  const body = escape(tweet.content.text);
  const handle = tweet.user.handle;
  const user = tweet.user.name;
  const profilePic = tweet.user.avatars;
  
  const $tweet = $(`
  <article class="tweet">
  <header>
  <div class="user">
    <img src=${profilePic} class="profile-pic">
    <p>${user}</p>
  </div>
  <div>
    <p class="user">${handle}</p>
  </div>
  </header>

  <div class="text-body">
    <p>${body}</p>
  </div>

  <footer>
    <p>${time}</p>
    <p class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i> 
    <i class="fas fa-heart"></i>
    </p>
  </footer>
  </article>
`);
return $tweet;
};

// fx to append tweet objects to tweets container
const renderTweets = function(tweets) {
  $('.tweets').empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweets').append($tweet)
  }
};

  // GET tweets from /tweets
  const loadTweets = function () {
    $.ajax({method: 'GET', url: '/tweets'})
    .then(data => {
      renderTweets(data)
    })
  };

$(document).ready(function() {

  loadTweets();

  // //submit form data / error messages
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    
    const tweetText = $('.new-tweet textarea').val();
    const maxChars = 140;

    if (tweetText === '') {
      $('.error p').replaceWith(`<p>"⚠ Please enter a value."</p>`);
    } else if (tweetText.length > maxChars) {
      $('.error p').replaceWith(`<p>"⚠ Your tweet contains too many characters.`);
    } else {
      $.ajax ({method: 'POST', url: '/tweets', data: $(this).serialize()})
      .then(() => 
        {loadTweets();
      });
    }
  });

});