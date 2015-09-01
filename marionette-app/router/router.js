var app = app || {};

var Workspace = Backbone.Router.extend({

  routes: {

    "character/:name": "character"

  },

  character: function(name) {

    $('.more-info-view').html("");

    var selected = app.characters.where({link: name})[0];

    new app.MoreInfoView({model: selected});

  }

});

app.TodoRouter = new Workspace();
Backbone.history.start();
