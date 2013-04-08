window.Product = {};



Product.View = Backbone.View.extend({
    render:function () {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
    }
});

$.fn.stars = function () {
    return $(this).each(function () {
        // Get the value
        var val = parseFloat($(this).html());
        val = Math.round(val * 2) / 2;
        /* To round to nearest half */
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
    });
};


$(function () {

    var productId = null;
    var myCart = new Cart();
    var cartData = null;
    var storage = null;

    var ProductRouter = Backbone.Router.extend({
        routes: {
            ":id": "setProductId"
        },

        setProductId: function(id){

           productId = id;

        }

    });
    var productRouter = new ProductRouter();

    Backbone.history.start();



    if (typeof(localStorage) == 'undefined' ) {
        console.log('browser does not support HTML5 localStorage.');
    } else {
        storage = window['localStorage']; 
        cartData = storage.getItem('jsonCart');
        var parsedData = JSON.parse(cartData);
        if(parsedData != null ){
            myCart.setCartItems(parsedData.cartItems);
            myCart.setSavedItems(parsedData.savedItems);
        }
    }

    var ProductModel = Backbone.Model.extend({
        url:"http://aguevara-linux.corp.walmart.com/search/catalog/itemIds.ems?itemids=" + productId,
//        url:"json/itemData.json",
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
        },

        getCartItem: function() {
            var ret = CartItem(
                {   qty:1,
                    name:this.getName(),
                    seller : 0,
                    price : this.getPrice(),
                    hasWarranty : false,
                    linkedWarrantyId : 0,
                    isPUT : false,
                    pickupStore : 0,
                    image: this.productData[0].productImageUrl,
                    id: this.productData[0].id,
                    isSavedItem: false
                })
            return ret;
        }

    });

    var productModel = new ProductModel();
    productModel.fetch();


// header
    var header = new Product.View({
        template: Handlebars.templates['productHeader']
    });

    header.render();

    $('#product-header').append(header.el);


// Item carousel


    var ProductView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
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

        events:{
            'click .add-to-cart-btn': 'click'
        },

        click: function(){
            cartData = storage.getItem('jsonCart');
            console.log('clicked: ' + cartData);
            var toStorage = new Array();
            // do we have cart data
            if(cartData != null){
                toStorage = JSON.parse(cartData);
                myCart.setCartItems(toStorage.cartItems);
                myCart.setSavedItems(toStorage.savedItems);
            }
            myCart.addItem(this.model.getCartItem());
            storage.setItem('jsonCart', JSON.stringify(myCart ) );

//            var cartItemCollection = new CartItemCollection();
//            cartItemCollection.reset(myCart.getCartItems());
//            var mainHeaderView = new MainHeaderView({
//                template:Handlebars.templates['main-header'],
//                model: cartItemCollection
//            });
//            mainHeaderView.render();
//
//            var headerCartView = new HeaderCartView({
//                template:Handlebars.templates['header-cart'],
//                model:productModel
//            });
//            headerCartView.render();

        },

        render:function () {
            this.$el.html(this.options.template({shortDesc:productModel.getShortDesc()}));
            $('#under-image-container').html(this.el);
            return this;
            this.delegateEvents(this.events);
        }
    });

    var addToCartView = new AddToCartView({
        template:Handlebars.templates['addToCart'],
        model:productModel
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
            this.$el.html(this.options.template({"viewedItems":data}));
        }

    });

    var peopleViewedView = new peopleViewedListView({
        template:Handlebars.templates['peopleWhoViewed'],
        model:peopleViewedModel
    });

    peopleViewedModel.fetch({success:function (data) {
        peopleViewedView.render();
        $('span.stars').stars();
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
        $('span.stars').stars();
    }});

    $('#ratings-reviews').append(ratingsReviewsView.el);

});



