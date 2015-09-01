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

    this.$el.html(this.template()).appendTo($('.characters'));

    var context = this;

    this.collection.each(function(character) {
      var characterView = new app.CharacterView({model: character});
      context.$el.append(characterView.render());
    });

  }

});
