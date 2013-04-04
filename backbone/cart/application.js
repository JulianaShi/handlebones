$(function () {

    var myCart = new Cart();
    var cartData = null;
    var storage = null;

    if (typeof(localStorage) == 'undefined' ) {
        console.log('browser does not support HTML5 localStorage.');
    } else {
        storage = window['localStorage'];
        cartData = storage.getItem('jsonCart');
    }

    var CartModel = Backbone.Model.extend({

        url:"../../json/cart.json",

        myCartData: null,

        parse: function(data){
            storage.setItem('jsonCart', JSON.stringify(data));
            myCart.setCartItems(data.cartItems);
            myCart.setSavedItems(data.savedItems);
            this.myCartData = data;
            return data;
        },

        getCartItems: function(){
            var items = this.myCartData.cartItems;
            var saved = this.myCartData.savedItems;
            var forPurchaseCount = 0;
            items.forEach(function(e){
                forPurchaseCount += e.qty;
            });
            myCart.setSize(forPurchaseCount);
            storage.setItem('jsonCart', JSON.stringify(myCart));
            var savedItemsCount = 0;
            saved.forEach(function(e){
                savedItemsCount += e.qty;
            });
            var id = this.myCartData.id;
            var all = this.myCartData;
            return {all:all, id:id, forPurchaseCount: forPurchaseCount, items: items, savedItemsCount:savedItemsCount, savedItems:saved };
        }

    });
    var cartModel = new CartModel();

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
            'click .save-for-later': 'saveForLater',
            'click .move-to-cart': 'moveToCart',
            'click .remove-from-cart': 'removeItemCart',
            'click .remove-from-saved': 'removeItemSaved'
        },

        saveForLater: function(event){
            console.log('saveforlater clicked');
            var itemToSave = $(event.target).attr('itemtosave');
            myCart.setSavedItem(itemToSave);
            storage.setItem('jsonCart', JSON.stringify(myCart));
            cartModel.trigger('change');
        },

        moveToCart: function(event){
            console.log('moved clicked');
            var itemToMove = $(event.target).attr('itemtomove');
            myCart.moveToCart(itemToMove);
            storage.setItem('jsonCart', JSON.stringify(myCart));
            cartModel.trigger('change');
        },

        removeItemCart: function(event){
            var itemToRemove = $(event.target).attr('itemtoremove');
            myCart.removeItem(itemToRemove, myCart.cartItems);
            storage.setItem('jsonCart', JSON.stringify(myCart));
            cartModel.trigger('change');
        },

        removeItemSaved: function(event){
            var itemToRemove = $(event.target).attr('itemtoremove');
            myCart.removeItem(itemToRemove, myCart.savedItems);
            storage.setItem('jsonCart', JSON.stringify(myCart));
            cartModel.trigger('change');
        },

        render:function(){
            this.$el.html(this.options.template(this.model.getCartItems()));
            $('#cart-item-container').html(this.el);
            this.delegateEvents(this.events);

        }

    });

    var CartHeader = Backbone.View.extend({
        initialize:function () {
            this.listenTo(this.model, 'change', this.render);
        },

        events:{
            'click .sort-button': 'click',
            'click .opt' : 'select',
            'mouseleave .options' : 'mouseleave'
        },

        click : function(event) {
            this.$el.find('.options').css({visibility:'visible'});
        },

        select : function(event) {
            var context = this.model.attributes;
            this.$el.find('.sort-button .text').text($(event.target).text());
            this.$el.find('.options').css({visibility:'hidden'});
            event.stopPropagation();
        },

        mouseleave : function(event) {
            this.$el.find('.options').css({visibility:'hidden'});
            event.stopPropagation();
        },

        render:function(){
            this.$el.html(this.options.template({"cartSize":myCart.getCartSize()}) );
            $('#cart-header-container').html(this.el);
            this.delegateEvents(this.events);
        }
    });



    var CartSubtotals = Backbone.View.extend({
        initialize:function () {
            this.listenTo(cartModel, 'change', this.render);
        },

        render:function(){
            this.$el.html(this.options.template({"subtotals": myCart.getSubtotals()}) );
            $('#cart-subtotal-container').html(this.el);
        }
    });




    var CartPageView = Backbone.View.extend({

        render: function(){
            console.log('CartPageView render');

            var cartItemView = new CartItemView({
                template:Handlebars.templates['cartItems'],
                model: cartModel
            });
            cartItemView.render();

            var cartHeader = new CartHeader({
                template:Handlebars.templates['cartSort'],
                model: cartModel
            });
            cartHeader.render();

            var cartSubtotals = new CartSubtotals({
                template:Handlebars.templates['cartSubTotal'],
                model: cartModel

            });
            cartSubtotals.render();
        }

    });
    var cartPageView = new CartPageView();
    cartPageView.render();


})