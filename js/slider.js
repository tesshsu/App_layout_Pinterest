imgcellInt = 1;
imgcellNext = 2;

$(document).ready(function(){
  $(".imgcell > img#1").fadeIn(300);
  startSlider();
});

function startSlider(){
 count = $(".imgcell > img").size();
 loop = setInterval(function(){
     if(imgcellNext > count){
	  imgcellNext = 1;
	  imgcellInt = 1;
	 }
     $(".imgcell > img").fadeOut(300);
	 $(".imgcell > img#" + imgcellNext).fadeIn(300);
	 
	 imgcellInt = imgcellNext;
	 imgcellNext = imgcellNext + 1;
	 
 },3000)
}