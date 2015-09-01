app.CharacterView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%- name %></td><td><%- clothing %></td><td><%- link %></td>'),

  render: function() {

    return this.$el.html(this.template(this.model.attributes));

  }

});
