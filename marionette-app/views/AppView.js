var app = app || {};

app.AppView = Marionette.LayoutView.extend({

  tagName: 'div',

  className: 'app-view-ui',

  template: Handlebars.compile($('#layoutTemplate').html()),

  regions: {
    'characters': "#characters-region",
    'more-info': "#more-info-region"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template()).appendTo($('.app-view'));
  }

});
