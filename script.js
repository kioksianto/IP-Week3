/*//Frond-end logic
$(document).ready(function(){
$('ul#row-1').on('mouseenter',function(){
var title = $(this).children().data('title');
var desc = $(this).children().data('desc');
});
//business-logic
//validation
if(desc === null){
    desc = 'Click To Enlarge';

}

if(title === null){
    title = '';
}
//Frond-end logic
//overlay div 
$(this).append('<div class = "overlay"></div>')

//getting the overlay div
var overlay = $(this).children('.overlay');

//adding HTML to overlay
overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

//fade in overlay
overlay.fadein(800);
});*/

$(document).ready(function(){
    $('div#whatwedo img').on('mouseenter',function(){
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        //validation
        if(desc === null){
            desc = 'Click To Enlarge';

        }
        if(title === null){
            title = '';
        }
        //create overlay div
        $(this).append('div class="overlay"></div>');

        //get the overlay div
        var overlay = $(this).children('.overlay');

        //adding HTML to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

        //fade in overlay
        overlay.fadeIn(800);


        
    });
    //Mouseleave overlay
    $('div#whatwedo img').on('mouseleave',function(){
       
        //create overlay div
        $(this).append('div class="overlay"></div>');

        //get the overlay div
        var overlay = $(this).children('.overlay');

        //fade out overlay
        overlay.fadeOut(500);


    });



});

 