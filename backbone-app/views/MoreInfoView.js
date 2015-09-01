var app = app || {};

app.MoreInfoView = Backbone.View.extend({

  tagName: 'ul',

  className: 'more-info-view-ui',

  template: _.template('<li><img src="<%- photo %>" alt=<%- name %>></li><li><%- bio %></li>'),

  initialize: function() {

    this.render();

  },

  render: function() {

    this.$el.html(this.template(this.model.attributes)).appendTo($('.more-info-view'));
  
  }

});
