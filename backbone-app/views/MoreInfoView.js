var app = app || {};

app.MoreInfoView = Backbone.View.extend({

  tagName: 'ul',

  className: 'more-info-view-ui',

  template: _.template('<li></li>')

});
