window.Product = {};

Product.View = Backbone.View.extend({
    render:function () {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
    }
});

$(function () {
    var ProductModel = Backbone.Model.extend({
        url:"http://aguevara-linux.corp.walmart.com/search/catalog/itemIds.ems?itemids=15739136",

        productData:{},

        parse:function (response) {
            this.productData = response;
            return response;
        },

        getAltImages:function () {
            return this.productData[0].alternateImageData;
        },

        getRatingUrl:function () {
            return this.productData[0].customerRatingUrl;
        },

        getName:function () {
            return this.productData[0].genericContent.itemName;
        },

        getPrice:function () {
            return this.productData[0].sellers[0].currentItemPrice;
        },

        getShortDesc:function () {
            return this.productData[0].genericContent.shortDescription;
        },

        getItemAttr:function () {
            return this.productData[0].itemAttributes;
        },

        getSupplierWarranty:function () {
            return this.productData[0].genericContent.supplierWarranty;
        },

        getWarrantyLength:function () {
            return this.productData[0].genericContent.warrantyLength;
        }

    });

    var productModel = new ProductModel();
    productModel.fetch();


// Item carousel


    var ProductView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
            var data = this.model.toJSON();
            this.$el.html(this.options.template({ name:productModel.getName(), price:productModel.getPrice(), ratingUrl:productModel.getRatingUrl(), altImages:productModel.getAltImages()}));
            $('#carouselItems').html(this.el);
        }
    });

    var productView = new ProductView({
        template:Handlebars.templates['itemCarousel'],
        model:productModel
    });


// Add to Cart and Description

    var AddToCartView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
            this.$el.html(this.options.template({shortDesc:productModel.getShortDesc()}));
            $('#under-image-container').html(this.el);
        }
    });

    var addToCartView = new AddToCartView({
        template:Handlebars.templates['addToCart']
    });


// people who viewed list


    var PeopleViewedModel = Backbone.Model.extend({
        url:"/json/products.json",
        parse:function (response) {
            return response;
        }
    });

    var peopleViewedModel = new PeopleViewedModel();


    var peopleViewedListView = Backbone.View.extend({
        render:function () {
            var data = this.model.toJSON();
            this.$el.html(this.options.template({"viewedItems":data[0]}));
        }

    });

    var peopleViewedView = new peopleViewedListView({
        template:Handlebars.templates['peopleWhoViewed'],
        model:peopleViewedModel
    });

    peopleViewedModel.fetch({success:function (data) {
        peopleViewedView.render();
    }});

    $('#people-who').append(peopleViewedView.el);


// product details tab

    var TabsView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
            this.$el.html(this.options.template({shortDesc:productModel.getShortDesc(), itemAttr:productModel.getItemAttr(), warrantySupplier:productModel.getSupplierWarranty(), warrantyLength:productModel.getWarrantyLength()}));
            $('#prod-details-tabs').html(this.el);
        }
    });

    var tabsView = new TabsView({
        template:Handlebars.templates['prodDetailTabs']
    });

// ratings reviews

    var RatingsReviewsModel = Backbone.Model.extend({
        url:"/json/ratingsReviews.json",
        parse:function (response) {
            return response;
        }
    });

    var ratingsReviewsModel = new RatingsReviewsModel();


    var RatingsReviewsView = Backbone.View.extend({
        render:function () {
            var data = this.model.toJSON();
            this.$el.html(this.options.template({"ratingsReviewsItems":data[0]}));
        }

    });

    var ratingsReviewsView = new RatingsReviewsView({
        template:Handlebars.templates['ratingsReviews'],
        model:ratingsReviewsModel
    });

    ratingsReviewsModel.fetch({success:function (data) {
        ratingsReviewsView.render();
    }});

    $('#ratings-reviews').append(ratingsReviewsView.el);

});



