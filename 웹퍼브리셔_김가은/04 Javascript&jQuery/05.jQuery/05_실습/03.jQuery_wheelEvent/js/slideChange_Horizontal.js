// slideChange_Horizontal.js

// 전역변수 설정

var pageCount = 0; // 현재 페이지 번호
var total; // 페이지 총 갯수를 담을 변수
var stat = 0; //이벤트 핸들러 실행 제어 (0- 실행정 혀용, 1-실행중 잠금)

$(document).ready(function(){

    $(document).on('mousewheel DOMMounseScroll', function(){
        
        //console.log('이벤트 실행');

        // 입장확인
        // 이벤트 핸들러 제어하기 (스크롤 잠금)
        if (stat === 1) return false;
        stat = 1;

        //2. 발생한 이벤트 정보 확인
        var evt = window.event;

        //3. wheelDelta 값 구하기!
        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        
        //4. 파이어폭스 브라우저를 위한 처리!
        var browserInfo = navigator.userAgent
        if (/Firefox/i.test(browserInfo)) {

            delta = -evt.detail;
            console.log('파이어폭스 detail:' + delta);
         }

         //5. 마이스 휠 이벤트로 페이지 이동하기
         // 마우스 휠 이동방향 -> 아래, 다음페이지 (오늘쪽 페이지) / -이동거리
         // 마우스 휠 이동방향 -> 위, 이전페이지 (왼쪽 페이지) / +이동거리

         if (delta > 0) {
            // 이전 페이지 이동 - 양수, 마우스휠 위로

            pageCount--;
            if(pageCount === -1) pageCount = 0; 

         }else {
            // 다음페이지 이동 -> 음수, 마우스휠 아래로

            pageCount++;
            if(pageCount === total) pageCount = total - 1;
         }

         var pageLeft = $('.page').eq(pageCount).offset().left;
         console.log('페이지 offset().left:' + pageLeft);

         //이동!!
         $('html, body').animate({
            scrollLeft: pageLeft
         }, 800, function(){
            stat = 0; //핸들러  실행 허용 상태로 변경!
         });
         
         menuChg();
    });

    $('.gnb a, .side-pager a').on('click', function (e){

        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        pageCount = idx;

        var pid = $(this).attr('href');
        console.log('클릭된 a의 id값:' + pid);

        var pageLeft = $(pid).offset().left;

        //이동
        $('html, body').animate({
            scrollLeft : pageLeft
        }, 800);

        menuChg();                   
    });

});




//// 메뉴변경 함수- .gnb ,side-pager 메뉴 동시변경

function menuChg() {
    $('.gnb li').eq(pageCount).addClass('on').siblings().removeClass('on');
    $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
}

