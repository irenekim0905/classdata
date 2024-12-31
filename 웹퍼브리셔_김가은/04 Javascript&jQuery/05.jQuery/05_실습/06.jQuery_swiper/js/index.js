
/* swiper. js  */

/*
pagination type
- bullet 원 (기본값)
- fraction 숫자

effect 
- slide : 슬라이드 효과 (기본값)
- fade : 페이드 효과
- cube : 큐브효과
- coverflow : 커버플로우 효과
- flip : 플립효과

loop (슬라이드 루프 설정)
- true : 무한루프
- false : 루프없음 (기본값)

*/

$(document).ready(function(){

        // swiper 플러그인 적용하기

        var swiper = new Swiper('.swiper-container', {

            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            loop: true,
            speed: 800,
            effect: 'coverflow ' 
            // 'cube'사각박스형으로 마우스로 밀면 박스가 돌아감
            // 'coverflow' 마우스를 옆으로 밀면 밀림 "슬라이드 구현"에 적합 
        });

});

