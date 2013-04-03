$(function () {

    var myCart = new Cart();
    var cartData = null;
    var storage = null;

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

    var OrderModel = Backbone.Model.extend({

        url:"../../json/order.json",

        orderData: {},

        parse: function(data){
            this.orderData = data;
            return data;
        },

        getCartItems: function(dynamicItemData){
            var items = this.myCartData.cartItems;
            var saved = this.myCartData.savedItems;
            var forPurchaseCount = 0;
            items.forEach(function(e){
                forPurchaseCount += e.qty;
            });
            var id = this.myCartData.id;
            var all = this.myCartData;
            return {all:all, id:id, forPurchaseCount: forPurchaseCount, items: items};
        }

    });

    var orderModel = new OrderModel();
    orderModel.fetch();




    var OrderView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(orderModel, 'change', this.render);
        },

        render:function () {
            var data = this.model.toJSON();
            this.$el.html(this.options.template({ "order":data}));
            $('#orderPage').html(this.el);
        }
    });

    var orderView = new OrderView({
        template:Handlebars.templates['reviewConfirmOrder','paymentShippingDetail', 'reviewLineItems','reviewSubtotals'],
        model:orderModel
    });


    // check to see if there is data in local storage
    if(cartData != null){
        var parsedData = JSON.parse(cartData);
        //build the model based on the data from sessionStorage
        //add attribute fromStorage
        cartModel.set({fromStorage: true});
        cartModel.myCartData = parsedData;
        myCart.setCartItems(parsedData.cartItems);
        myCart.setSavedItems(parsedData.savedItems);
    }

    var CartItemView = Backbone.View.extend({

        initialize:function () {

            if(!this.model.attributes.fromStorage ){
                console.log("fetching from db...");
                this.model.fetch();
            }else{
                console.log("model has data from storage");
                this.render();
            }
            this.listenTo(this.model, 'change', this.render);
        },

        events:{
            'change #payment-details-dd': 'paymentDetails',
            'change #shipping-dd': 'shippingDetails'
        },

        paymentDetails: function(event){
            var el = $("#payment-details-dd");
            // If dropdown is a selection use it otherwise set to null
            var last4 = (el.val() == null? "" : el.val());
            console.log('last 4: ' + last4);
            return last4;
        },

        shippingDetails: function(event){
            var el = $("#shipping-dd");
            // If dropdown is a selection use it otherwise set to null
            var shippingDetail = (el.val() == null? "" : el.val());
            console.log('shippingDetail: ' + shippingDetail);
            return shippingDetail;
        },

        render:function(){
            this.$el.html(this.options.template(this.model.getCartItems()));
            $('#orderPage').html(this.el);
            this.delegateEvents(this.events);

        }

    });

//    var CartHeader = Backbone.View.extend({
//        initialize:function () {
//            this.listenTo(this.model, 'change', this.render);
//        },
//
//        events:{
//            'click .sort-button': 'click',
//            'click .opt' : 'select',
//            'mouseleave .options' : 'mouseleave'
//        },
//
//        click : function(event) {
//            this.$el.find('.options').css({visibility:'visible'});
//        },
//
//        select : function(event) {
//            var context = this.model.attributes;
//            this.$el.find('.sort-button .text').text($(event.target).text());
//            this.$el.find('.options').css({visibility:'hidden'});
//            event.stopPropagation();
//        },
//
//        mouseleave : function(event) {
//            this.$el.find('.options').css({visibility:'hidden'});
//            event.stopPropagation();
//        },
//
//        render:function(){
//            this.$el.html(this.options.template({"cartSize":myCart.getCartSize()}) );
//            $('#cart-header-container').html(this.el);
//            this.delegateEvents(this.events);
//        }
//    });
//
//
//
//    var CartSubtotals = Backbone.View.extend({
//        initialize:function () {
//            this.listenTo(cartModel, 'change', this.render);
//        },
//
//        render:function(){
//            this.$el.html(this.options.template({"subtotals": myCart.getSubtotals()}) );
//            $('#cart-subtotal-container').html(this.el);
//        }
//    });




    var OrderPageView = Backbone.View.extend({

        render: function(){
            var cartItemView = new CartItemView({
                template:Handlebars.templates['reviewConfirmOrder','reviewLineItems','reviewSubtotals'],
                model: orderModel
            });
            cartItemView.render();
            orderView.render();

//            var cartHeader = new CartHeader({
//                template:Handlebars.templates['cartSort'],
//                model: cartModel
//            });
//            cartHeader.render();
//
//            var cartSubtotals = new CartSubtotals({
//                template:Handlebars.templates['cartSubTotal'],
//                model: cartModel
//
//            });
//            cartSubtotals.render();

//            var cart = function () {
//                var o = $('.cart').offset();
//                $('.cart-page').css({ 'top': o.top + 60,
//                    'left': o.left - (750 - 120),
//                    'border-radius':'5px'
//                });
//                $('.cart-page').slideDown(1000);
//            }
//            cart();
//
//            $('.selected-product').hide();

        }

    });
    var orderPageView = new OrderPageView();
    orderPageView.render();







})