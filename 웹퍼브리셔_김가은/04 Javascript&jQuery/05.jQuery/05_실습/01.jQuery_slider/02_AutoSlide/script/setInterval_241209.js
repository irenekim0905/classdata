// setInterval.js

//alert('연결~~~~~');

$(document).ready(function () {
    
    //.pager의 초기설정!
    $('.pager li').first().css('color', 'red');
    
    //함수 최초 호출! (한번만 실행!)
    //leftmove();

    //$('.main').click(leftmove);

    //자동실행 - 인터벌 실행!
    //setInterval(leftmove, 3000);

    var autocall = setInterval(leftmove, 3000); 

    //슬라이드에 마우스 오버 / 아웃
    $('.slide-box').mouseenter(function () {
        //자동실행 멈춤, 인터벌 제거 
        clearInterval(autocall);
        
    }).mouseleave(function () {
        //인터벌 재가동!
        autocall = setInterval(function () {
            leftmove();

            console.log('인터벌 재가동!!!');
        }, 3000);
    });


    //왼쪽으로 이동하는 함수 만들기!
    var page = 0; //현재 슬라이드 페이지를 담은 변수!

    function leftmove() {
        //console.log('함수실행!!!!');

        //다음 페이지 변경!
        //변경한 페이지 값을 .gallery의 이동값으로 활용!
        page++;
        console.log('현재 page값: ' + page);

        if (page === 4) {
            $('.gallery').css({
                left: 0
            });

            // 다음페이지 이동을 위한 page 변수값 변경
            page = 1;
            console.log('변경된 page값: ' + page);
        }
        
        $('.gallery').animate({
            left: -(1280*page)
        }, 800);


        //페이저 변경!
        //페이저 버튼을 모두 검정으로 초기화!!!
        $('.pager li').css({
            color: 'black'
        });

        //현재 보여지는 페이저 버튼만 빨강으로 변경!
        $('#btn' + page).css({
            color: 'red'
        });

        if (page === 3) { 
            $('#btn0').css({
                color: 'red'
            });
        }

    }


});