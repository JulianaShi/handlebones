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
    var TvFinderModel= Backbone.Model.extend({
        url: "/json/products.json",
        parse: function(response) {
            return response;
        }
    });

    var tvFinderModel = new TvFinderModel();


    var TVFinderListView = Backbone.View.extend({
        render:function(){
            var data = this.model.toJSON();
            console.log(data);
            this.$el.html(this.options.template({"item":data}));
            return this;
        }

    });

    var tvFinderView = new TVFinderListView({
        template: Handlebars.templates['tvresults'],
        model: tvFinderModel
    });

    tvFinderModel.fetch({success:function(data){
        tvFinderView.render();
    }});

    // clear html template
    $("#results").html("");
    $('#results').append(tvFinderView.el);

});

//header include
$(function() {

    var header = new TvFinder.View({
        template: Handlebars.templates['header']
    });

    header.render();

    $('#header').append(header.el);

});

//filters include
$(function() {

    var filters = new TvFinder.View({
        template: Handlebars.templates['filters']
    });

    filters.render();

    $('#tv-refinements').append(filters.el);

});

//clear filters include
$(function() {

    var clearFilters = new TvFinder.View({
        template: Handlebars.templates['clearFilters']
    });

    clearFilters.render();

    $('#filters-text').append(clearFilters.el);

});

//footer include
$(function() {

    var footer = new TvFinder.View({
        template: Handlebars.templates['footer']
    });

    footer.render();

    $('#footer').append(footer.el);

});