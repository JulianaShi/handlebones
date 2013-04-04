$(function () {

    var myCart = new Cart();
    var cartData = null;
    var storage = null;

    if (typeof(localStorage) == 'undefined') {
        console.log('browser does not support HTML5 localStorage.');
    } else {
        storage = window['localStorage'];
        cartData = storage.getItem('jsonCart');
        var parsedData = JSON.parse(cartData);
        if (parsedData != null) {
            myCart.setCartItems(parsedData.cartItems);
            myCart.setSavedItems(parsedData.savedItems);
        }
    }

    var OrderModel = Backbone.Model.extend({

        url:"../../json/order.json",

        parse:function (data) {
            return data;
        }

    });

    var orderModel = new OrderModel();
    orderModel.fetch();

    // get the cart item data
    var getCartItems = function () {
        var items = myCart.cartItems;
        var forPurchaseCount = 0;
        items.forEach(function (e) {
            forPurchaseCount += e.qty;
        });
        var all = cartData;
        var subtotal= myCart.getSubtotals();
        var total = myCart.getTotal("66", "70");
        return {cart:all, forPurchaseCount:forPurchaseCount, items:items, total:total,  subtotal:subtotal};
    }

// Payment Shipping view
    var PaymentShippingView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render:function () {
            var data = this.model.toJSON();
            console.log(data);
            this.$el.html(this.options.template({ "order":data}));
            $('#payment-shipping-container').html(this.el);
        }
    });

    var paymentShippingView = new PaymentShippingView({
        template:Handlebars.templates['paymentShippingDetails'],
        model:orderModel
    });


    // Confirm Order view
    var ConfirmOrderView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(orderModel, 'change', this.render);
        },

        render:function () {
            this.$el.html(this.options.template(getCartItems()));
            console.log(getCartItems());
            $('#confirm-order-container').html(this.el);
        }
    });

    var confirmOrderView = new ConfirmOrderView({
        template:Handlebars.templates['reviewConfirmOrder'],
        model:orderModel
    });

    // Review items view
    var LineItemsView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(orderModel, 'change', this.render);
        },

        render:function () {
            this.$el.html(this.options.template(getCartItems()));
            $('#line-items-container').html(this.el);
        }
    });

    var lineItemsView = new LineItemsView({
        template:Handlebars.templates['reviewLineItems'],
        model:orderModel
    });


    // Subtotals view
    var SubtotalsView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(orderModel, 'change', this.render);
        },

        render:function () {
            this.$el.html(this.options.template(getCartItems()));
            $('#review-subtotals-container').html(this.el);
        }
    });

    var subtotalsView = new SubtotalsView({
        template:Handlebars.templates['reviewSubtotals'],
        model:orderModel
    });


    //Overall render

    var OrderPageView = Backbone.View.extend({

        render:function () {
            confirmOrderView.render();
//            paymentShippingView.render();
            lineItemsView.render();
            subtotalsView.render();
        }

    });
    var orderPageView = new OrderPageView();
    orderPageView.render();


//    var CartItemView = Backbone.View.extend({
//
//        initialize:function () {
//           this.render();
//           this.listenTo(this.model, 'change', this.render);
//        },
//
//        events:{
//            'change #payment-details-dd': 'paymentDetails',
//            'change #shipping-dd': 'shippingDetails'
//        },
//
//        paymentDetails: function(event){
//            var el = $("#payment-details-dd");
//            // If dropdown is a selection use it otherwise set to null
//            var last4 = (el.val() == null? "" : el.val());
//            console.log('last 4: ' + last4);
//            return last4;
//        },
//
//        shippingDetails: function(event){
//            var el = $("#shipping-dd");
//            // If dropdown is a selection use it otherwise set to null
//            var shippingDetail = (el.val() == null? "" : el.val());
//            console.log('shippingDetail: ' + shippingDetail);
//            return shippingDetail;
//        },
//
//        render:function(){
//            this.$el.html(this.options.template(getCartItems()));
//            $('#orderPage').html(this.el);
//            this.delegateEvents(this.events);
//
//        }
//
//    });

})