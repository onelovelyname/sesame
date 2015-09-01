app.CharacterView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%- name %></td><td><%- clothing %></td><td><a href ="#character<%- link %>"><%- link %></a></td>'),

  render: function() {

    return this.$el.html(this.template(this.model.attributes));

  }

});
