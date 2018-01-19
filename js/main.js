<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// var menuOpen = false;

// $('.trigger').click(function(){
//   if (menuOpen) {
//     $('.content').animate({'width': '100%'})
//     $('.menu').animate({'width': '0'})
//     menuOpen = false;
//   } else {
//     $('.content').animate({'width': '80%'})
//     $('.menu').animate({'width': '20%'})
//     menuOpen = true;
//   }
// })
=======
=======
>>>>>>> parent of 1c5fe28... temp
=======
>>>>>>> parent of 1c5fe28... temp
var menuOpen = false;
var wordCount = 0;
var liVal = 0;
var wordList = ['Hello', 'Bonjour', '안녕하세요','はじめまして'];
$('#helloWord').css({'display': 'none'});
$('#helloWord').animate({'opacity':'show'}, 2500);

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
  if (menuOpen == false){
      menuOpen = true;

      if (window.matchMedia("(max-width: 768px)").matches) {
        $('.page[value="0"], .page[value="1"], .page[value="2"], .page[value="3"]').hide();
        $('.menu').animate({'opacity':'1', 'width': '100%'}, 1000);
        $(this).css({'transition': 'all 1s ease', 'transform': 'rotate(45deg)'});

      } else if(window.matchMedia("(max-width: 1600px)").matches){
        $('.menu').animate({'opacity':'1', 'width': '20%'},700);
        $(this).css({'transition': 'all 1s ease', 'transform': 'rotate(45deg)'});
      }
  } else {
    menuOpen = false;
    $('.menu').animate({'width': '0px','opacity':'0'}, 700);
    $(this).css({'transition': 'all 1s ease', 'transform':'rotate(0deg)'});
    $('.page[value="'+liVal+'"]').animate({'opacity':'show'}, 1200);
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
      $(this).animate({'opacity':'show'}, 1200);
    } else {
      $(this).hide();
    }
  })
})

$('#explore').click(function(){
<<<<<<< HEAD
<<<<<<< HEAD
=======
  $('.container').css({'align-items':'flex-start'});
>>>>>>> parent of 1c5fe28... temp
=======
  $('.container').css({'align-items':'flex-start'});
>>>>>>> parent of 1c5fe28... temp
 $('.page').each(function(){
  if($(this).attr('value') == 2){
    $(this).animate({'opacity':'show'}, 1200);
  } else {
    $(this).hide();
  }

  })
})

$('.trigger').click(function(){

    if(window.matchMedia("(min-width: 769px)").matches && liVal==0 && menuOpen == true){
      $('.page[value="0"]').animate({'transition': 'all 1s ease', 'left':'-20%'},700);
    } else if(liVal==0 && menuOpen==false){
      $('.page[value="0"]').animate({'transition': 'all 1s ease', 'left':'0%'},1200);
    }
  
})



$('.page[value="1"], .page[value="2"], .page[value="3"]').hide();

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 64b2e23... explore
=======
>>>>>>> parent of 1c5fe28... temp
=======
>>>>>>> parent of 1c5fe28... temp
