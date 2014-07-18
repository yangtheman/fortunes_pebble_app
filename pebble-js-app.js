var UI = require('ui');
var ajax = require('ajax');

// Create a main card, which will be displayed when the app is launched.
// Card is like a window in modern browsers.
var main = new UI.Card({
  title: 'Fortunes',
  body: 'Press the middle button see a fortune.'
});

// This card will be used to display fortunes. 
var newFortuneCard = new UI.Card({
  scrollable: true,
});

// This card listens to 'select' button click event and call showFortune() function.
newFortuneCard.on('click', 'select', function(e) {
  // Display "Loading...." message until a fortune is received.
  newFortuneCard.body("Loading....");
  showFortune();
});

// This fuction makes an AJAX call to the fortune server I created, and upon receiving data, 
// it updates body of newForturneCard. 
function showFortune() {
  ajax({ url: 'http://getfortune.herokuapp.com/' }, function (data) {
    newFortuneCard.body(data);
  });
}

// Main card listens to 'any' button click and show newFortuneCard card. 
main.on('click', function(e) {
  newFortuneCard.body("Loading....");
  newFortuneCard.show();
  showFortune();
});

// This is the only function called when app is launched.
// It will display the main card. 
main.show();
