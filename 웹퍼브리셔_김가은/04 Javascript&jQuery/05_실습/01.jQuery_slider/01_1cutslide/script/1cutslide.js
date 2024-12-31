//1cutslide.js

$(document).ready(function () {
    // 초기설정 - 슬라이드 배치 설정
    // 이전 버튼 클릭을 대히하여 마지막 li를 첫번째로 이동

    $('.slider ul li:last').prependTo('.slider ul');

    // 한칸의 크기 구하기
    var liw = $('.slider ul li').width();
   // console.log('li하나의 크기:' + liw);

    $('.slider ul').css('margin-left', -liw);

    // 다음 버튼을 1번 클릭 했을때!
    $('.next a').click(function (e) {
        // a태그의 기본이동 막기!
        e.preventDefault();

        $('.slider ul').animate({
            marginLeft: '-=' + liw
        }, 800, function () {
            // 다음을 위한 준비!
            // 1.첫번째 li 슬라이드를 맨 뒤로 보내기 >> append()
            // 2.슬라이드 순서 변경에 따라 ul의 위치 조절하기 >> margin

            $('.slider ul li').first().appendTo('.slider ul'); // 첫번째 슬라이드를 (appendTO) 맨마지막으로 보내
            $('.slider ul').css('margin-left', -liw); // 
        });

    });

    // 이전 버튼을 클릭 했을떼!
    $('.prev a').click(function (e) {
        // a의 기본 기능 막기
        e.preventDefault();
        $('.slider ul').animate({
           marginLeft: '+=' + liw
        },800,function () {
            //다음 두번째 클릭을 위한 준비
            $('.slider ul li').last().prependTo('.slider ul'); // 슬라이드의 마지막 li를 맨앞으로 가져와
            $('.slider ul').css('margin-left', -liw);
        });

    });

}); //마지막뚜겅