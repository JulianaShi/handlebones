window.TvFinder = {};


TvFinder.View = Backbone.View.extend({
    render: function() {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
    }
});

//$(function() {
//    var model = new Backbone.Model({});
//
//    var indexView = new TvFinder.View({
//        template: Handlebars.templates['index'],
//        model: model
//    });
//    indexView.render();
//    $('body').append(indexView.el);
//});



// TV results passes all products json data to view
//todo: move filter logic
$(function() {

    var productModel= Backbone.Model.extend({});

    var ProductCollection = Backbone.Collection.extend({
        url: "/json/products.json",

        model: productModel,

        original: [],

        parse: function (response) {
            this.original = _.clone(response);
            return response;
        },

        filterBySize: function (minSize) {
            filtered = this.filter(function (item) {
                return item.get("size") >= minSize;
            });
            console.log(filtered);
            this.reset(filtered);
        },

        filterAll: function(type, brand) {
            filtered = this.original.items.filter(function (item) {
                return new RegExp('\\b' + brand + '\\b').test(item.name)
                    && new RegExp('\\b' + type + '\\b').test(item.name);
            });
            this.reset(filtered);
        }
    });




    var productCollection = new ProductCollection();


    var TVFinderListView = Backbone.View.extend({
        render:function(){
            var data = this.model.toJSON();
            console.log(data);
            this.$el.html(this.options.template({"item":data}));
            return this;
        }

    });

    var tvFinderListView = new TVFinderListView({
        template: Handlebars.templates['tvresults'],
        model: productCollection
    });

    productCollection.fetch({success:function(data){
        tvFinderListView.render();
    }});

    // clear html template
//    $("#results").html("");
    $('#results').append(tvFinderListView.el);



//header include
    var header = new TvFinder.View({
        template: Handlebars.templates['header']
    });

    header.render();

    $('#header').append(header.el);


//filters include

    var FilterView = Backbone.View.extend({

        events:{
            'click #tv-brand option': 'select',
            'click #tv-types option': 'select',
            'click #tv-sort option': 'select'
        },

        select : function(event) {

            var el1 = $("#tv-types");
            var el2 = $("#tv-brand");
            var el3 = $("#tv-sort");
            // If dropdown is a selection use it otherwise set to null
            var type = (el1.val() == null? "" : el1.val());
            var brand = (el2.val() == null ? "" : el2.val());
            var sort = el3.val();
            console.log( "brand " +brand +"type " +type + "sort " +sort );
            productCollection.filterAll(type, brand);
        },

        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
        }

    });

    var filters = new FilterView({
        template: Handlebars.templates['filters']
    });

    filters.render();

    $('#tv-refinements').append(filters.el);


//clear filters include
    var clearFilters = new TvFinder.View({
        template: Handlebars.templates['clearFilters']
    });

    clearFilters.render();

    $('#filters-text').append(clearFilters.el);


//footer include

    var footer = new TvFinder.View({
        template: Handlebars.templates['footer']
    });

    footer.render();

    $('#footer').append(footer.el);

});