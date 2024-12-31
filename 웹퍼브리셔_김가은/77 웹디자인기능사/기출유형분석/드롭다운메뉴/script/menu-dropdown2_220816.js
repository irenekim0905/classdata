//menu-dropdown2.js

$(document).ready(function(){
	
	$('.menu li').mouseover(function(){
		
		$('.submenu').stop().slideDown(800);
		
	}).mouseout(function(){
		
		$('.submenu').stop().slideUp(600);
		
	});
	
});