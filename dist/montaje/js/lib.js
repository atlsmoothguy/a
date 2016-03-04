$(function() {
    $('input.number').number(true, 0, ',', '.');

    $("#frm").submit(function(event){
        event.preventDefault();

        var factor = $("#factor").val();
        var production = $("#production").val();
        var product = $("#product").val();
        var result = (production / factor) * product;

        $("#result").html(result);
    });
});