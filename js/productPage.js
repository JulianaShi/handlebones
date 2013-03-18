$(function () {
    $('#hero-image .boxes').each(function (i, elmnt) {
//    $.each([1,2,3,4,5],function (i, elmnt) {
        var newElmnt = $('<a href="#">').html('<img src="img/product/greydot.png" />').bind('click', function () {
            var visibleBox = $('#hero-image .boxes:visible');
            visibleBox.hide();
            $($('#hero-image .boxes').get(i)).show();
            return false;
        });
        $('#pager').append(newElmnt);
    });

    $("#next").click(function () {
        console.log("next worked");
        var visibleBox = $('#hero-image .boxes:visible');
        visibleBox.hide();
        var nextToShow = $(visibleBox).next('.boxes:hidden');
        if (nextToShow.length > 0) {
            nextToShow.show();
        } else {
            $('#hero-image .boxes:hidden:first').show();
        }
        return false;
    });

    $('#prev').click(function () {
        var visibleBox = $('#hero-image .boxes:visible');
        visibleBox.hide();
        var nextToShow = $(visibleBox).prev('.boxes:hidden');
        if (nextToShow.length > 0) {
            nextToShow.show();
        } else {
            $('#hero-image .boxes:hidden:first').show();
        }
        console.log("prev worked");
        return false;
    });
    $('#prev-rr').click(function () {
        var visibleBox = $('#hero-image .boxes:visible');
        visibleBox.hide();
        var nextToShow = $(visibleBox).prev('.boxes:hidden');
        if (nextToShow.length > 0) {
            nextToShow.show();
        } else {
            $('#hero-image .boxes:hidden:first').show();
        }
        return false;
    });
    $('#next-rr').click(function () {
        var visibleBox = $('#hero-image .boxes:visible');
        visibleBox.hide();
        var nextToShow = $(visibleBox).prev('.boxes:hidden');
        if (nextToShow.length > 0) {
            nextToShow.show();
        } else {
            $('#hero-image .boxes:hidden:first').show();
        }
        return false;
    });
});

$("#next").click(function () { alert("hi");
    var visibleBox = $('#hero-image .boxes:visible');
    visibleBox.hide();
    var nextToShow = $(visibleBox).next('.boxes:hidden');
    if (nextToShow.length > 0) {
        nextToShow.show();
    } else {
        $('#hero-image .boxes:hidden:first').show();
    }
    console.log("next worked");

    return false;
});

$('#prev').click(function () {
    var visibleBox = $('#hero-image .boxes:visible');
    visibleBox.hide();
    var nextToShow = $(visibleBox).prev('.boxes:hidden');
    if (nextToShow.length > 0) {
        nextToShow.show();
    } else {
        $('#hero-image .boxes:hidden:first').show();
    }
    console.log("prev worked");
    return false;
});