// slideChange.js 

/*  

마우스 휠 이벤트
마우스 휠을 움직일때 발생하는 이벤트
기본이벤트 = 스크롤 이벤트
마우스 휠은 스크롤을 하기 위한 도구(하드웨어)

*마우스 휠 이벤트명
1) mousewheel()
2) wheel : 표준코딩에서 사용하는 이벤트명
3) DOMMouseScroll : 파이어폭스 전용 이벤트명

*/

/// 전역변수 설정
var pageCount = 0; // 현재 페이지 번호! (첫 페이지 0 = 초깃값)
var total; // 총페이지 갯수 -> 문서가 준비되면, 총페이지 갯수 구하기!
var stat = 0; // 스크롤 상태변경 (0-실행전/허용, 1-실행후/잠금)
// 총 페이지 수가 고정된 값이라면 상수로 선언! 상수는 값의 재할당(변경) 불가!
//const tltal = 6;

$(document).ready(function () {

    // 총 페이지 갯수 읽어오기!
    total = $('.page').length;
    console.log('총 페이지 갯수 : ' + total);

    $(document).on('mousewheel DOMMouseScroll', function () {
        //  console.log('휠 움직이는 중~');

        //입장확인~~~~~
        //휠 이벤트 핸들러 제어하기
        //이벤트 핸들러가 실행되는 동안 스크롤 잠금!

        if (stat === 1) return false;
        stat = 1;

        // 발생한 이벤트 정보 확인하기
        var evt = window.event;
        console.log(evt);

        //3. wheelDelth값 구하기
        /* 
        wheelDelta
        - chrome, ie 에서 사용
        - 오페라, 파이어폭스 브라우저는 detail 사용
        - 휠 이벤트 발생 시, 이벤트 횟수, 방향, 이동거리 등을 리턴해 주는 속성
        - 양수(+)는 윗 방향, 음수(-)는 아랫방향으로 휠 이동
        */

        var delta = evt.datail ? evt.detail : evt.wheelDelta;
        console.log('마우스휠 델타값' + delta);

        //파이어폭스 브라우저를 위한 처리!
        //파이어폭스는 델타값이 반대로 반환 (스크롤 처리방향이 반대)
        //휠 다운 - 양수, 휠 업 - 음수

        if (/Firefox/i.test(navigator.userAgent)) {
            console, log('파이어폭스 detail:' + delta);



            delta = -evt.detail;
        }

        /*
        자바스크립트의 정규표현식
        찾고자 하는 문자 또는 문자패턴 / 플래그

        플래그에 사용할 수 있는 값
        i (ignore case) : 대소문자를 구별하지 않고 검색
        g (global) : 문자열 내의 모든 패턴 검색
        m (multi line) : 문자열의 행이 바뀌더라도 검색

        2) test(문자열)
        : 문자열과 정규펴현의 일치하는 문자(또는 문자패턴)가 있으면 true, 없으면 false 반환 
        3) navigator.userAgent : 현재 브라우저 객체를 리턴

        */
        // navigator.userAgent : 현재 브라우저 객체를 리턴! 

        // 마우스휠 이벤트로 페이지 이동하기
        /* 
        마우스휠 이동방향 -> 아래, 다음페이지 / -120
        마우스휠 이동방향 -> 위, 이전페이지 / 120
        */
        if (delta < 0) {
            //음수, 아랫방향, 다음페이지 이동 

            pageCount++;
            if (pageCount === total) pageCount = total - 1;

        } else {
            // 양수, 윗방향, 이전페이지 이동
            pageCount--;
            if (pageCount === -1) pageCount = 0;
        }
        //if else문을 통해 이동할 페이지의 순번 반환!

        //해당 페이지로 이동!
        var pageTop = $('.page').eq(pageCount).offset().top;
        console.log('페이지 offset:' + pageTop);

        //이동 !!!!
        $('html,body').animate({

            scrollTop: pageTop + 'px'
        }, 800, function () {
            stat = 0; // 스크롤 허용 상태로 변경!
        });

        //gnb메뉴, pager메뉴 변경!- 메뉴변경 함수 호출
        menuChg();

    }); // mousewheel 이벤트

    $('.gnb a, .side-pager a').on('click', function (e) {

        //a의 기본이동 막기!
        e.preventDefoult();

        $('this').parent().index();
        console.log(idx);

        pageCount = idx;
        console.log('변경된 page번호:' + pageCount);

        //스크롤 이동거리 구하기(1) - pageCount 또는 idx 사용
        var pageTop = $('.page').eq(idx).offset().top;

        //스크롤 이동거리 구하기(2)  - 클릭된 a의 href값 활용하기

        var pid = $(this).attr('hrdf');
        console.log('클리된 a의 href값: ' + pid);
        var pageTop = $(pid).offset().top;

        //이동
        $('html, body').animate({
            scrollTop: pageTop
        }, 800);

        menuChg();


    });

});

//// 메뉴변경 함수- .gnb ,side-pager 메뉴 동시변경

function menuChg() {
    $('.gnb li').eq(pageCount).addClass('on').siblings().removeClass('on');
    $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
}















