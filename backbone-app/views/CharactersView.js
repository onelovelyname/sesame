var app = app || {};

app.CharactersView = Backbone.View.extend({

  tagName: 'table',

  className: 'characters-view-ui',

  template: _.template("<thead><tr><th>Name</th><th>Clothing</th><th>More Info</th></tr></thead>"),

  events: {

  },

  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var collectionViews = this.collection.map(function(character) {
      var characterView = new app.CharacterView({model: character}).render();
      return characterView;
    });

    this.$el.html(collectionViews).appendTo($('.characters'));

  }

});
