window.Product = {};


Product.View = Backbone.View.extend({
    render: function() {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
    }
});

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
    }
});

// Item carousel
$(function() {

    var productView = new ProductView({
        template: Handlebars.templates['itemCarousel'],
        model: productModel
    });

    productModel.fetch({success:function(data){
        productView.render();
    }});

    $('#carouselItems').append(productView.el);
});

// Add to Cart and Description
$(function() {

    var addToCartView = new ProductView({
        template: Handlebars.templates['addToCart'],
        model: productModel
    });

    productModel.fetch({success:function(data){
        addToCartView.render();
    }});

    $('#under-image-container').append(addToCartView.el);
});

// people who viewed list
$(function() {
    var PeopleViewedModel= Backbone.Model.extend({
        url: "js/products.json",
        parse: function(response) {
            return response;
        }
    });

    var peopleViewedModel = new PeopleViewedModel();


    var peopleViewedListView = Backbone.View.extend({
        render:function(){
            var data = this.model.toJSON();
            this.$el.html(this.options.template({"viewedItems":data[0]}));
        }

    });

    var peopleViewedView = new peopleViewedListView({
        template: Handlebars.templates['peopleWhoViewed'],
        model: peopleViewedModel
    });

    peopleViewedModel.fetch({success:function(data){
        peopleViewedView.render();
    }});

    $('#people-who').append(peopleViewedView.el);

});

// product details tab
$(function() {

    var tabsView = new ProductView({
        template: Handlebars.templates['prodDetailTabs'],
        model: productModel
    });

    productModel.fetch({success:function(data){
        tabsView.render();
    }});

    $('#prod-details-tabs').append(tabsView.el);
});

// ratings reviews
$(function() {
    var RatingsReviewsModel= Backbone.Model.extend({
        url: "js/ratingsReviews.json",
        parse: function(response) {
            return response;
        }
    });

    var ratingsReviewsModel = new RatingsReviewsModel();


    var RatingsReviewsView = Backbone.View.extend({
        render:function(){
            var data = this.model.toJSON();
            this.$el.html(this.options.template({"ratingsReviewsItems":data[0]}));
        }

    });

    var ratingsReviewsView = new RatingsReviewsView({
        template: Handlebars.templates['ratingsReviews'],
        model: ratingsReviewsModel
    });

    ratingsReviewsModel.fetch({success:function(data){
        ratingsReviewsView.render();
    }});

    $('#ratings-reviews').append(ratingsReviewsView.el);

});



