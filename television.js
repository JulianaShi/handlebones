$(function () {
    $("#slider").slider({
        range:true,
        min:0,
        max:80,
        values:[ 20, 40 ],
        slide:function (event, ui) {
              var sliderMin = ui.values[ 0 ]
              var sliderMax = ui.values[ 1 ]

            $("#amount").html('"' + sliderMin + ' - "' + sliderMax);
            $.fn.filterAndSort(items, sliderMin, sliderMax);
        }
    });

    $("#amount").html('"' + $("#slider").slider("values", 0) +
        ' - "' + $("#slider").slider("values", 1));

    $('#tv-brand').change(function (e) {
        $.fn.filterAndSort(items);
    });

    $('#tv-types').change(function (e) {
        $.fn.filterAndSort(items);
    });

    $('#tv-sort').change(function (e) {
        $.fn.filterAndSort(items);
    });

    $.fn.filterAndSort(items);

    $('span.stars').stars(items);

    $("#clear-filter").click(function () {
        $("tv-types").val("Select");
        $("tv-brand").val("Select");
        $("#slider").slider("values", [20, 40] );
        $("#amount").html('"' + $("#slider").slider("values", 0) +
            ' - "' + $("#slider").slider("values", 1));
        $.fn.filterAndSort(items);
    });
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

$.fn.sortByNameAZ = function (a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameB > nameA) {
        return 1
    }
    return 0;
};

$.fn.sortByNameZA = function (a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return 1;
    }
    if (nameB > nameA) {
        return -1
    }
    return 0;
};


$.fn.sortByPrice = function(a,b) { return a.price - b.price };


$.fn.filterAndSort = function (items, minSize, maxSize) {
    // if not passed in args then get default vals
    if (arguments.length == 1){
        minSize = $("#slider").slider("values", 0);
        maxSize = $("#slider").slider("values", 1);
    }
    // If dropdown is a selection use it otherwise set to null
    var type = ($("#tv-types").val() == "Select"? "" : $("#tv-types").val());
    var brand = ($("#tv-brand").val() == "Select"? "" : $("#tv-brand").val());
    var sort = $("#tv-sort").val();
    console.log("minSize " +minSize +", maxSize " +maxSize + "brand " +brand +"type " +type + "sort " +sort )
    var finalArray = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // apply all filters
        if ((item.size >= minSize && item.size <= maxSize)
             && new RegExp('\\b' + brand + '\\b').test(item.name)
             && new RegExp('\\b' + type + '\\b').test(item.name)
            ){
            finalArray.push(item);
        }
    }
    // apply sorting by price or alphabetical
    if (sort == "Price"){
        finalArray.sort($.fn.sortByPrice);

    }
    if (sort == "AZ") {
        finalArray.sort($.fn.sortByNameAZ);

    }
    if (sort == "ZA") {
        finalArray.sort($.fn.sortByNameZA);

    }
    // clear html template
    $( "#results").html("")
    //apply json to template and append results
    $( "#resultsTemplate" ).tmpl( finalArray )
        .appendTo( "#results" );

}

