//1cutslide-1_241114.js

//alert('연결~~~~~');

$(document).ready(function () {
    
    //초기설정 - 슬라이드 배치 설정
    //이전 버튼 클릭을 대비하여 마지막 li를 첫번째로 이동 
    $('.slider ul li:last').prependTo('.slider ul');

    //li 한칸의 크기 구하기
    var liW = $('.slider ul li').width();
    console.log('li 하나의 크기: ' + liW);

    $('.slider ul').css('margin-left', -liW);
    
    //다음 버튼을 클릭했을 때!
    $('.next a').click(function (e) {

        //a태그의 기본이동 막기!
        e.preventDefault();

        $('.slider ul').animate({
            marginLeft: '-=' + liW
        }, 800, function () {
            
            //다음(두번째 클릭)을 위한 준비!
            //1) 첫번째 li(슬라이드)를 맨 뒤로 보내기 >> append()
            //2) 슬라이드 순서 변경에 따라 ul의 위치 조절하기 >> margin

            $('.slider ul li').first().appendTo('.slider ul');
            $('.slider ul').css('margin-left',-liW);

        });
        
    });

    //이전 버튼을 클릭했을 때!
    $('.prev a').click(function (e) { 

        //a 기본기능 막기!
        e.preventDefault();

        $('.slider ul').animate({
            marginLeft: '+=' + liW
        }, 800, function () {
            
            //다음(두번째 클릭)을 위한 준비!!!
            $('.slider ul li:last').prependTo('.slider ul');
            $('.slider ul').css('margin-left',-liW);
        });
    });


});