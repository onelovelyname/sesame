var app = app || {};

app.CharactersView = Marionette.CompositeView.extend({

  template: Handlebars.compile($('#charactersTemplate').html()),
  
  className: 'characters-view-ui',

  childView: app.CharacterView, //new!

  childViewContainer: 'tbody' //new!

  // initialize: function() {
  //   this.render();
  //   this.listenTo(this.collection, "add", this.render);
  //   this.listenTo(this.collection, "remove", this.render);

  // }

  // render: function() {

  //   this.$el.html(this.template()).appendTo($('.characters'));

  //   var context = this;

  //   this.collection.each(function(character) {
  //     var characterView = new app.CharacterView({model: character});
  //     context.$el.append(characterView.render());
  //   });

  // }

});
