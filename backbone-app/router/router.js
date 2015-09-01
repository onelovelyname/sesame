var app = app || {};

var Workspace = Backbone.Router.extend({

  routes: {

    "home": "home",
    "character/:name": "character"

  },

  home: function() {

    console.log("in home");

  },

  character: function(name) {

    console.log("in character: ", name);

  }

});

app.TodoRouter = new Workspace();
Backbone.history.start();
