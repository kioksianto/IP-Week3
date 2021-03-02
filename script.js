//Frond-end logic
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
//overlay div 
$(this).append('<div class = "overlay"></div>')

//getting the overlay div
var overlay = $(this).children('.overlay');

//adding HTML to overlay
overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

//fade in overlay
overlay.fadein(800);
});
