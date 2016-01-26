$(function () {
    var b = $("#calculate");
    var w = $("#wrapper");
    var l = $("#list");

    //w.height(l.outerHeight(true));

    b.click(function () {

        if (w.hasClass('open')) {
            w.removeClass('open');
            w.height(0);
            //alert("test");
        } else {
            w.addClass('open');
            w.height(l.outerHeight(true));
            //alert("test2");
        }

    });
});
