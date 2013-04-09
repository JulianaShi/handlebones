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
            filterAndSort(items, sliderMin, sliderMax);
        }
    });

    $("#amount").html('"' + $("#slider").slider("values", 0) +
        ' - "' + $("#slider").slider("values", 1));

//    $('#tv-brand').change(function (e) {
//        filterAndSort(items);
//    });
//
//    $('#tv-types').change(function (e) {
//        filterAndSort(items);
//    });

    $('#tv-sort').change(function (e) {
        filterAndSort(items);
    });

    filterAndSort(items);


    $("#clear-filter").click(function () {
        $("#tv-types").prop("selectedIndex",0);
        $("#tv-brand").prop("selectedIndex",0);
        $("#tv-sort").val("LowestPrice");
        $("#slider").slider("values", [20, 40]);
        $("#amount").html('"' + $("#slider").slider("values", 0) +
            ' - "' + $("#slider").slider("values", 1));
        filterAndSort(items);
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


sortByPriceLow = function (a, b) {
    return a.price - b.price
};
sortByPriceHigh = function (a, b) {
    return b.price - a.price
};
sortByRating = function (a, b) {
    return b.rating - a.rating
};
sortByScreenSize = function (a, b) {
    return a.size - b.size
};

filterAndSort = function (items, minSize, maxSize) {
    var matches;
    // if not passed in args then get default vals
    if (arguments.length == 1) {
        minSize = $("#slider").slider("values", 0);
        maxSize = $("#slider").slider("values", 1);
    }
    
    var el1 = $("#tv-types");
    var el2 = $("#tv-brand");
    var el3 = $("#tv-sort");
    // If dropdown is a selection use it otherwise set to null
    var type = (el1.val() == null? "" : el1.val());
    var brand = (el2.val() == null ? "" : el2.val());
    var sort = el3.val();
//    console.log("minSize " +minSize +", maxSize " +maxSize + "brand " +brand +"type " +type + "sort " +sort )
    var finalArray = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // apply all filters
        if ((item.size >= minSize && item.size <= maxSize)
            && new RegExp('\\b' + brand + '\\b').test(item.name)
            && new RegExp('\\b' + type + '\\b').test(item.name)
            ) {
            finalArray.push(item);
        }
    }

    matches = finalArray.length;
    $("#match-num").html(matches);

    // apply sorting by price or alphabetical
    if (sort == "LowestPrice") {
        finalArray.sort(sortByPriceLow);

    }
    if (sort == "HighestPrice") {
        finalArray.sort(sortByPriceHigh);

    }
    if (sort == "TopRated") {
        finalArray.sort(sortByRating);

    }
    if (sort == "ScreenSize") {
        finalArray.sort(sortByScreenSize);

    }

    $('span.stars').stars();


}

