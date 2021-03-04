
//Overlay style on What We Do section on Website

$(document).ready(function(){

    // Design Description
    $('#desc-image-1').click(function(){
        $('#desc-1').show();
        $('#desc-image-1').hide();

    })

    $('#desc-1').click(function(){
        $('#desc-image-1').show();
        $('#desc-1').hide();

    })

    // Development Description
    $('#desc-image-2').click(function(){
        $('#desc-2').show();
        $('#desc-image-2').hide();

    })

    $('#desc-2').click(function(){
        $('#desc-image-2').show();
        $('#desc-2').hide();

    })

    // Product Design Description
    $('#desc-image-3').click(function(){
        $('#desc-3').show();
        $('#desc-image-3').hide();

    })

    $('#desc-3').click(function(){
        $('#desc-image-3').show();
        $('#desc-3').hide();

    })

});


//Message alert after subscription
function setName(){
    var name = document.getElementById('mce-NAME');
    alert (name + ",we have received your message.");
}
