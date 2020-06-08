$(function(){
  
  var welcomeTop;
  var iamTop;
  var skillTop;
  var portfolioTop;
  var telTop;

  //start 문서준비
  navMenu();
  sectionTop();
  telBottom();
  //end 문서준비

  // start 버거메뉴이벤트
  $('#open_nav_btn').click(function(){
    $('.nav>ul').css('display','block');
  });
  $('#close_nav_btn').click(function(){
    $('.nav>ul').css('display','none');
  });
  // end 버거메뉴이벤트

  // start 리사이즈이벤트
  $(window).resize(function(){
    navMenu();
    sectionTop();
    telBottom();
  });
  //end 리사이즈이벤트
  
  //start 네비게이션변환함수
  function navMenu(){
    var winWidth=$(window).width();
    if(winWidth>=768){
      $('.nav>ul').css('display','flex');
      $('#open_nav_btn').css('display','none');
    }else{
      $('.nav>ul').css('display','none');
      $('#open_nav_btn').css('display','block');
    }
  }
  //end 네비게이션변환함수
  
  // start 스크롤이벤트
    $(window).scroll(function(){
      telBottom();
      var scrTop=$(this).scrollTop();
      if(scrTop<=50){
        $('.header').css({
          backgroundColor:'transparent',
          height:'100px'
        });
        colorWhiteGray('#cccccc');
      }else if(scrTop>50 && scrTop<skillTop){
        $('.header').css({
          backgroundColor:'#ffffff',
          height:'80px'          
        });
        colorWhiteGray('#cccccc');
      }else if(scrTop>=skillTop && scrTop<portfolioTop){
        $('.header').css({
          backgroundColor:'#ff0000',
          height:'80px'
        });
        colorWhiteGray('#ffffff');
      }else if(scrTop>=portfolioTop && scrTop<telTop){
        $('.header').css({
          backgroundColor:'#ffffff',
          height:'80px'
        });
        colorWhiteGray('#cccccc');
      }else if(scrTop>=telTop){
        $('.header').css({
          backgroundColor:'#00ff00',
          height:'80px'
        });
        colorWhiteGray('#ffffff');
      }
    });
  // end 스크롤이벤트
  
  // start header 폰트 컬러 함수
    function colorWhiteGray(color){
      $('.header a').mouseover(function(){
        $(this).css('color',color);
      });
      $('.header a').mouseout(function(){
        $(this).css('color','#333333');
      });
    }
    
  // end header 폰트 컬러 함수

  // start section Y좌표값 함수
  function sectionTop(){
    welcomeTop=$('#welcome').offset().top-80;
    iamTop=$('#i_am').offset().top-80;
    skillTop=$('#skill').offset().top-80;
    portfolioTop=$('#portfolio').offset().top-80;
    telTop=$('#tel').offset().top-80;
  }
  // end section Y좌표값 함수

  // start 해더 푸터 마우스 휠 이벤트
  $('body').on('mousewheel',function(e){
    var vectorY=e.originalEvent.wheelDelta;
    // console.log(vectorY);
    if(vectorY>0){
      // console.log('윗쪽');
      $('footer').fadeOut(200);
      $('header').fadeIn(200);
    }else{
      // console.log('아랫쪽');
      $('footer').fadeIn(200);
      $('header').fadeOut(200);
    }
  });    
  // end 해더 푸터 마우스 휠 이벤트

  function telBottom(){
    var footerHeight=$('footer').height();
    // console.log(footerHeight);
    $('#tel').css('margin-bottom',footerHeight);
  }
})
