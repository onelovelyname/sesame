var app = app || {};

app.Characters = Backbone.Collection.extend({

  model: app.Character

});

app.sesameCharacters = [{
  "name": "Ernie",
  "clothing": "striped red and blue shirt",
  "photo": "http://www.sesameworkshop.org/press-kits/season41/images/monsterbook/ernie.jpg",
  "bio": "Some people call me wise, playful and naturally outgoing. I like to have fun, especially with my best friend Bert. I like to ask a lot of questions and I am great at explaining things, but can sometimes be a bit too smart for my own good. I tend to talk myself into some tight corners, and I often fall prey to my own jokes.",
  "link": "ernie"
},
{
  "name": "Burt",
  "clothing": "striped orange and blue shirt",
  "photo": "http://www.sesameworkshop.org/press-kits/season41/images/monsterbook/bert.jpg",
  "bio": "I am the long-suffering sidekick of Ernie. I am more mature, analytical, and the voice of reason in our relationship. Some might view me as eccentric because I collect bottle caps and paper clips, play the tuba, and love Bernice, my pet pigeon. I’m not always a willing participant in Ernie’s escapades because I always sense that the tables are destined to be turned on me, or that I will end up with the short end of the stick! In the end, however, I always forgive Ernie, forever remaining his “old buddy.”",
  "link": "burt"
},
{
  "name": "Big Bird",
  "clothing": "birthday suit and feathers",
  "photo": "http://www.sesameworkshop.org/press-kits/season41/images/monsterbook/bigbird.jpg",
  "bio": "I am an 8foot 2inch tall 6-year-old yellow bird. I often get really excited over new things, but sometimes I am disappointed when things don’t work out or when I make mistakes. But I always try again, and correct my mistakes by being persistent. I love my teddy bear, Radar. I love making new friends on Sesame Street!",
  "link": "bigbird"
},
{
  "name": "Oscar",
  "clothing": "trash can",
  "photo": "http://www.sesameworkshop.org/press-kits/season41/images/monsterbook/oscar.jpg",
  "bio": "I’m the resident Grouch on Sesame Street and I despise all things nice and sweet. Happy? Now scram!",
  "link": "oscar"
},
{
  "name": "Elmo",
  "clothing": "none",
  "photo": "http://www.sesameworkshop.org/press-kits/season41/images/monsterbook/elmo.jpg",
  "bio": "Elmo is 3 ½ years old. Elmo has red fur and Elmo loves playing with his friends Zoe and Grover. Elmo loves riding on this tricycle and being tickled. Elmo also has a pet goldfish, Dorothy. Elmo’s friends tell Elmo that Elmo has a contagious giggle. Elmo likes to be enthusiastic, friendly, and cheerful, and Elmo always wants to be part of everything that goes on. Sometimes Elmo doesn’t know how to do what Elmo wants. But that never stops Elmo because Elmo has a very positive, optimistic view of Elmo and life!",
  "link": "elmo"
}];

app.characters = new app.Characters(app.sesameCharacters, {model: app.Character});
