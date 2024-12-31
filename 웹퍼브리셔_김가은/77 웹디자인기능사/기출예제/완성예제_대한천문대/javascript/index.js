// jQuery 

$(document).ready(function () {

    //1. 메뉴 드롭다운 - slideDown / slideUp
    $('.mainmenu>li').mouseover(function () {
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.submenu').stop().slideUp(500);
    });

    //2. 메인 슬라이드
    //gt선택자 : 선택한 요소 중 지정한 인덱스보다 큰(greater than) 인덱스를 참조하는 요소만 선택
    //기본형 : $("요소선택:gt(index)")

    $('.slide a:gt(0)').hide(); //인덱스 0보다 큰 요소(1,2) 숨기기

    //setInterval(function(){자바스크립트 코드}, 일정시간 간격) : 지속적으로 일정한 시간 간격으로 함수를 호출하여 코드를 실행
    setInterval(function () {
        $('.slide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.slide')
    }, 3000);


    //이전(형)&다음(동생)요소 선택자 : 선택한 요소를 기준으로 바로 이전 또는 다음 요소만 선택

    //end()선택자는 필터링되기 이전의 선택자가 적용
    //$('요소선택').탐색선택자().end() >> 탐색선택자는 위치탐색 선택자 의미

    //append(), appendTo() : 선택한 요소 내의 마지막 위치에 새 요소를 생성하고 추가
    //$("요소선택").append(새 요소);
    //$("새 요소").appendTo(요소선택);

    
    //3. 탭메뉴 구현
    $('.tabmenu>li>a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });


    //4. 레이어 팝업
    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });



}); //jQuery