var menuOpen = false;

$('.trigger').click(function(){
  if (menuOpen == false){
    $('.menu').animate({'width': '50%', 'minWidth': '300px', 'marginRight': '30px'});
    $(this).css({'transition': 'transform 0.5s', 'transform': 'rotate(45deg)'});
    menuOpen = true;
  } else {
    $('.menu').animate({'width': '0px', 'minWidth': '0px', 'marginRight': '0px'});
    $(this).css({'transition': 'transform 0.5s', 'transform': 'rotate(0deg)'});
    menuOpen = false;
  }
})

$('.page').click(function(){
  if (menuOpen == true) {
    $('.trigger').click();
  }
})

$('.menu li').click(function(){
  var liVal = $(this).attr('value');
  // $('.trigger').click();
  $('.page').each(function(){
    if (liVal == $(this).attr('value')){
      $(this).animate({'opacity':'show'}, 1000);
    } else {
      $(this).hide();
    }
  })
})
$('.page[value="1"], .page[value="2"], .page[value="3"]').hide()
