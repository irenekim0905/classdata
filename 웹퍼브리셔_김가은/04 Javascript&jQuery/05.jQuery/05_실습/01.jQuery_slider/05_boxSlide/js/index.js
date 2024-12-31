// index.js 

$(function () {
  // 초기설정

  $('.cb3 .caption').css('display', 'block');

  $('.btn-prev').click(function () {
    // slide(false);
    slide(0);

    change();
  });

  $('.btn-next').click(function () {
    // slide(true);
    slide(1);

    change();
  });

});

//슬라이드 함수
var star = 0; //광클금지 제어 (0-클릭허용/1-클릭잠금)

function slide(direction) {

  if (star === 1) return false;
  stat = 1;

  // if else  , else if 문 사용하면됨

  // direction = true, if문 실행, 다음이동
  // direction = false, else문 실행, 이전 이동

  if (direction) {
    // 다음이동
    //  alert('다음케이크 나와라');
    /*  $('.box-wrap').animate({
        Left: '-100%'
      },800); */

    $('.viewer li').first().insertAfter($('.viewer li').last());


  } else {

    // 이전이동
    //  alert('이전케이크 나와라');

    $('.viewer li').last().insertBefore($('.viewer li').first());

  }

  //변경된 li순서를 다시 읽어 와서
  //순서대로 클래스(.cd1 ~ .cd5)를 부여!

  var viewer = document.querySelector('.viewer');
  var box = viewer.querySelectorAll('li');

  console.log(box);

  for (var i = 0; i < box.length; i++) {
    //클래스 재부여!
    box[i].setAttribute('class', 'cb' + (i + 1));
  }

    // 잠금해제!
    setTimeout(function(){
      stat = 0;
    }, 500);

    /*
    setTimeout - 일정시간 후에 단 한번 코드 실행!
    
    var 참조변수 = setTimeout(function(){}, 시간);
    clearTimeout(참조변수);
    */
}



// 캡션변경함수 
function change() {
  $('.cb3').find('.caption').delay(1000).fadeIn(600).end().siblings().find('.caption').fadeOut(600);
}

// 캡션변경 함수 v2
function change2() {
  $('.caption').hide();
  $('.cb3').find('.caption').delay(1000).fadeIn(600);
}
