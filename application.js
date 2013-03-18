window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});

$(function() {
  var model = new Backbone.Model({
    greeting: ''
  });
  var indexView = new Application.View({
    template: Handlebars.templates['index'],
    model: model
  });
  indexView.render();
  $('body').append(indexView.el);
});

$(function() {
    var ProductModel= new Backbone.Model.extend({
        parse: function(response) {
            this.alternateImageData = new Backbone.Collection(response.alternateImageData);
            return this.alternateImageData;
        }
    });

    var ProductColection = Backbone.Collection.extend({
        model: ProductModel,
        url: 'http://aguevara-linux.corp.walmart.com/search/catalog/itemIds.ems?itemids=15739136',

        parse: function(data) {
            this.page=data.page;
            return data.items;
        }
    });

    var userView = new Application.View({
        template: Handlebars.templates['user'],
        model: userModel
    });
    userView.render();
    $('.test-user').append(userView.el);
});