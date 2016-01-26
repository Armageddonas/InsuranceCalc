$(function () {
    var b = $("#calculate");
    var w = $("#wrapper");
    var l = $("#list");

    var capital = $("#capital");
    var sq_meters = $("#sq_Meters");
    var result = $("#result");

    b.click(function () {
        result.text(capital.val() * sq_meters.val());

        w.height(l.outerHeight(true) + result.outerHeight(true));
    });
});
