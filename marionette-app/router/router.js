var app = app || {};

app.AppController = {

  character: function(name) {

    $('.more-info-view').html("");

    var selected = app.characters.where({link: name})[0];

    app.layoutView.getRegion('more-info').show(new app.MoreInfoView({model: selected}));

  }

};


$(document).ready(function() {
  
  app.layoutView = new app.AppView();
  
  app.layoutView.getRegion('characters').show(new app.CharactersView({collection: app.characters}));

  app.Router = new Marionette.AppRouter({

    controller: app.AppController,
    appRoutes: {
      "character/:name": "character"
    }

  });
  
  Backbone.history.start();

});
