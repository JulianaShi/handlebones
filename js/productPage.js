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

    $("#right-arrow").click(function () {
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
        return false;
    });
    $('#prev-rr').click(function () {
        var visibleBox = $('#selected-review-container .rr-boxes:visible');
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
        var visibleBox = $('#selected-review-container .rr-boxes:visible');
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
