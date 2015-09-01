var app = app || {};

var sesameCharacters = [{
  "name": "Ernie",
  "clothing": "striped red and blue shirt",
  "link": "/ernie"
},
{
  "name": "Burt",
  "clothing": "striped orange and blue shirt",
  "link": "/burt"
},
{
  "name": "Big Bird",
  "clothing": "birthday suit and feathers",
  "link": "bigbird"
},
{
  "name": "Oscar",
  "clothing": "trash can",
  "link": "/oscar"
},
{
  "name": "Elmo",
  "clothing": "none",
  "link": "/elmo"
}];

$(document).ready(function() {
  
  new app.AppView();
  
  var characters = new app.Characters(sesameCharacters, {model: app.Character});

  new app.CharactersView({collection: characters});

});
