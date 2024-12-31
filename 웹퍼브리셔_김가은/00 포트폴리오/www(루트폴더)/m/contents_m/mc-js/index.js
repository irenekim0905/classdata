

// 모바일 버전
// 모바일 메인이미지 슬라이드 만들기
$(document).ready(function () {

    //왼쪽으로 이동하는 함수 만들기
    var liwidth = $('.gallery li').width();
    console.log(liwidth); 

    $('.gallery li').last().prependTo('.gallery');
    $('.gallery').css('left', -liwidth);

    setInterval(function () {

        $('.gallery').animate({
            // left: '-='1369
            left: '-=' + liwidth
        }, 'slow', function () {
            $('.gallery li').first().appendTo('.gallery');
            $('.gallery').css('left', -liwidth);
        });
    }, 3000);

});

// artist tabmenu 버튼누르면 해당 내용으로 이동 만들기

$(document).ready(function () {

    $('.tab-menu a').click(function (e) {

        e.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);

        // 선택된 탭메뉴 디자인 변경
        $(this).parent().addClass('on').siblings().removeClass('on');

        // 내용변경
        $(aHref).addClass('on').siblings().removeClass('on');
    });

});

// 모바일 메뉴 드롭다운 메뉴 기능추가 241224

    $(document).ready(function(){

        $('.m-menu').click(function(){

            //$(this).find('.show-menu').slideDown();

            $('.show-menu').slideToggle();

        });

        //$('.m-menu').


    });


// 모바일 하단 고정메뉴 스티커 기능추가

