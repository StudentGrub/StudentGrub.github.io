var path = ["image1.jpg","image2.jpg","image3.jpg"];
var i;
function swapImage(){
slide = document.images.slide;
$(slide).fadeOut(50);
swapAnimate();
setTimeout("swapImage()",5000);
}
function swapAnimate(){
$(slide).animate({
			
				left:'+=40px',	
				  height:'482.375px',
				  width:'703.125px'});
document.images.slide.src=path[i];
$(slide).fadeIn();
$(slide).animate({
			
				left:'-=40px',

				duration:4500,
				  height:'578.85px',
				  width:'843.75px'}, "slow");
if (i<path.length-1) i++; else i =0;
}
window.onload=swapImage;