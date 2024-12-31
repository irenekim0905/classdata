//menu-dropdown1.js

$(document).ready(function(){
	
	//대메뉴에 마우스를 올리면 해당 대메뉴의 서브메뉴만 펼쳐짐
	$('.menu > li').mouseenter(function(){
		$(this).children('ul.submenu').slideDown();
	});
	
	$('.menu > li').mouseleave(function(){
		$('ul.submenu').stop().slideUp();
	});
	
});