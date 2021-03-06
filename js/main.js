var menuOpen = false;
var modalOpen = false;
var wordCount = 0;
var liVal = 0;
var wrapNum;
var wordList = ['Hello', 'Bonjour', '안녕하세요','はじめまして'];
$('#helloWord').css({'display': 'none'});
$('#helloWord').animate({'opacity':'show'}, 2500);

function adjustLeftWidth(modal_wrap) {
  var parentWidth = $(modal_wrap).width();    
  if (window.matchMedia("(min-width: 769px)").matches) {
    $(".left").width(parseInt(parentWidth) * 0.3);
    $(".left").animate({'opacity': '1'}, 'slow');
  } else {
    $(".left").width('100%');
  }
}

window.setInterval(function(){
  $('#helloWord').html(wordList[wordCount]);
  $('#helloWord').fadeTo(1000,1).delay(500);
  if (wordCount >= wordList.length - 1){
    wordCount = 0;
    // console.log(wordCount);
  } else {
    wordCount += 1;
  }
  $('#helloWord').fadeTo(1000,0.01),{duration:1000};
}, 2500)


$('.trigger').click(function(){
  if (!menuOpen && !modalOpen){
      menuOpen = true;

      if (window.matchMedia("(max-width: 768px)").matches) {
        $('.page[value="0"], .page[value="1"], .page[value="2"], .page[value="3"]').hide();
        $('.menu').animate({'opacity':'1', 'width': '100%'}, 1000);
        $(this).css({'transition': 'all 1s ease', 'transform': 'rotate(45deg)'});

      } else {
        $('.menu').animate({'opacity':'1', 'width': '20%'},700);
        $(this).css({'transition': 'all 1s ease', 'transform': 'rotate(45deg)'});
      }
  } else {
    menuOpen = false;
    $('.menu').animate({'width': '0px','opacity':'0'}, 700);
    $(this).css({'transition': 'all 1s ease', 'transform':'rotate(0deg)'});
    $('.page[value="'+liVal+'"]').show();
  }
})

$('.page, .menu li').click(function(){
  if (menuOpen == true) {
    $('.trigger').click();
  }
})

$('.menu li').click(function(){
  liVal = $(this).attr('value');

  if(liVal == 2){
    $('.container').css({'align-items':'flex-start'});
  } else {
    $('.container').css({'align-items':'center'})
  }
  $('.page').each(function(){
    if (liVal == $(this).attr('value')){
      $(this).animate({'opacity':'show'}, 'slow');
    } else {
      $(this).hide();
    }
  })
})

$('#explore').click(function(){
 $('.page').each(function(){
  if($(this).attr('value') == 2){
    $(this).animate({'opacity':'show'}, 1200);
    liVal = 2;
  } else {
    $(this).hide();
  }

  })
})

$('.trigger').click(function(){
  if (modalOpen){
    $('.modal').hide('slow');
    $('.list').show('slow');
    $('.modal_wrap[value='+ wrapNum +']').hide(500);
    modalOpen = false;
  } else if (liVal==0 && menuOpen){
    $('.page[value="0"]').animate({'transition': 'all 1s ease', 'left':'-20%'},700);
  } else if(liVal==0 && menuOpen==false){
    $('.page[value="0"]').animate({'transition': 'all 1s ease', 'left':'0%'},700);
  }
})

$('.gallery_wrap').click(function(){
  wrapNum = $(this).attr('value');
  $('.list').hide('slow');
  $('.modal').show('slow');
  var openedModal = $('.modal_wrap[value='+ wrapNum +']');
  $(openedModal).show(500, function(){
    adjustLeftWidth(openedModal[0]);
  });
  $('.trigger').css({'transition': 'all 1s ease', 'transform':'rotate(45deg)'});
  modalOpen = true;
  $(window).resize(
    function() {
      adjustLeftWidth(openedModal[0]);
  })
})


$('.page[value="1"], .page[value="2"], .page[value="3"]').hide();