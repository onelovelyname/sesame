var app = app || {};

app.Workspace = Backbone.Router.extend({

  routes: {

    "character/:name": "character"

  },

  character: function(name) {

    $('.more-info-view').html("");

    var selected = app.characters.where({link: name})[0];

    new app.MoreInfoView({model: selected});

  }

});

$(document).ready(function() {
  
  new app.AppView();
  
  new app.CharactersView({collection: app.characters});

  app.Router = new app.Workspace();
  Backbone.history.start();

});
