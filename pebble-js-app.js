var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'Fortunes',
  body: 'Press the middle button see a fortune.'
});

var newFortuneCard = new UI.Card({
  scrollable: true,
});
newFortuneCard.on('click', 'select', function(e) {
  newFortuneCard.body("Loading....");
  showFortune();
});

function showFortune() {
  ajax({ url: 'http://getfortune.herokuapp.com/' }, function (data) {
    newFortuneCard.body(data);
  });
}

main.on('click', function(e) {
  newFortuneCard.body("Loading....");
  newFortuneCard.show();
  showFortune();
});

main.show();
