var app = app || {};

app.AppView = Backbone.View.extend({

  tagName: 'div',

  className: 'app-view-ui',

  template: _.template('<p>Sesame Street is an engaging tv show for children.</p><section class="characters"></section>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template()).appendTo($('body'));
  }

});
