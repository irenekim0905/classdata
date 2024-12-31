//example.js

/// 전역변수 설정 //////////////////////////////////
var pageCount = 0; //현재 페이지 0
var total; //총 페이지 갯수 
var stat = 0; //이벤트 핸들러 제어 (0-허용/1-잠금)

var scLock = 0; //0-스크롤, 1-잠금
///////////////////////////////////////////////////


$(document).ready(function () {

    total = $('.page').length;
    console.log('총 페이지 갯수: ' + total);

    /* $('.slide').on('mousewheel DOMMouseScroll', function (e) {
        //console.log('휠 이벤트~~~');

        e.preventDefault();

        move();

    }); */
});


$(window).scroll(function () {

    var slidePos = $('#viewer').offset().top;
    var scTop = $(this).scrollTop();
    console.log('slide섹션의 위치값: ' + slidePos + '\n' + 'scrollTop 위치값: ' + scTop);

    var gap = 100; //if문 실행 기준을 위해 설정!

    
    if (scTop >= slidePos && scTop <= slidePos+gap) {

        scLock = 1;

        //section.slide 영역 내에서 휠이벤트 발생!!!
        $('#viewer').on('mousewheel DOMMouseScroll', function (e) {

            e.preventDefault();

            move();
        });

    }


});



// 함수 
function move() {

    if (stat === 1) return false;
    stat = 1;

    var evt = window.event;
    //console.log(evt); 

    var delta = evt.detail ? evt.detail : evt.wheelDelta;
    //console.log('마우스휠 델타값: ' + delta);

    if (/Firefox/i.test(navigator.userAgent)) {
        delta = -evt.detail;
        console.log('파이어폭스 detail: ' + delta);
    }

    if (delta < 0) {
        //음수, 아랫방향, 다음페이지 이동

        pageCount++;
        //if (pageCount === total) pageCount = total - 1;

        if (pageCount === total) {
            pageCount = total - 1;

            scLock = 0; //전체 스크롤 잠금해제
            //console.log('scLock값: ' + scLock);
        };

    } else {
        //양수, 윗방향, 이전페이지 이동

        pageCount--;
        //if (pageCount === -1) pageCount = 0;
        
        if (pageCount === -1) { 
            pageCount = 0;

            scLock = 0; //전체 스크롤 잠금해제
            console.log('scLock값: ' + scLock);
        }
    }

    if (scLock === 0) {
        console.log('휠이벤트 제거!');
        $('#viewer').off('mousewheel DOMMouseScroll');
    }


    $('.slide-wrap').animate({
        left: -(100 * pageCount) + '%'
    }, 800, function () {
        stat = 0
    });

}