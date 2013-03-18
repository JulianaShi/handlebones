window.Product = {};


Product.View = Backbone.View.extend({
    render: function() {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
    }
});

$(function() {
    var ProductModel= Backbone.Model.extend({
        url: "js/itemData.json",
        parse: function(response) {
            return response;
        }
    });

    var productModel = new ProductModel();


    var ProductView = Backbone.View.extend({
        render:function(){
            var data = this.model.toJSON();
            this.$el.html(this.options.template({"item":data[0]}));
            console.log(this.options.template({"item":data[0]}));
            return this;
        }
    });

    var productView = new ProductView({
        template: Handlebars.templates['itemCarousel'],
        model: productModel
    });

    productModel.fetch({success:function(data){
        productView.render();
    }});

    $('#carouselItems').append(productView.el);

});