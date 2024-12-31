// index.js 웹버전
// alert('Ready Move');

// 해당 페이지로 이동하기
$(document).ready(function () {

    // #photo #ai이 문서로부터 떨어진 거리 구하기

    var aipos = $('#aibox').offset().top;
    var photopos = $('#photobox').offset().top;

    //  console.log(aipos + '\n' + photopos);

    $('#aibtn').click(function () {
        $('html,body').animate({
            scrollTop: aipos
        }, 1000);

    });
    $('#photobtn').click(function () {
        $('html,body').animate({
            scrollTop: photopos
        }, 1000);
    });

});

// 메인이미지 슬라이드 만들기
$(document).ready(function () {

    //왼쪽으로 이동하는 함수 만들기
    var liwidth = $('.gallery li').width();
    console.log(liwidth); // 1369

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





