// copyright
$(function() {
  $('.footer').append('<div class="credit"><p>Template designed by <a href="//sora-maru.jp/" target="_blank">sora-maru</a></p></div>');
});
// hover
$(function() {
  $('a, input[type="button"], input[type="submit"], button, .touch-hover')
    .on('touchstart mousedown', function(){
      $(this).addClass('hover');
  }).on('touchend mouseup', function(){
      $(this).removeClass('hover');
  });
});

// track alignment
$(window).on('load resize', function(){
  if($(window).width() >= 576){
    var count = 0;
    var array = [];
    var oddHeight = 0;
    var evenHeight = 0;
    $('.track .track__item').each(function(){
      count++;
      var itemHeight = $(this).outerHeight(true);
      array.push(itemHeight);
    });
    console.log(array);

    var halfCount = Math.round(count / 2);
    for (i=0;i<array.length;i++){
      if(halfCount <= i){
        evenHeight = evenHeight + array[i];
      } else {
        oddHeight = oddHeight + array[i];
      }
    }

    if(oddHeight >= evenHeight){
      $('.track').css('height', oddHeight +'px');
    } else {
      $('.track').css('height', evenHeight +'px');
    }
  } else {
    $('.track').css('height', 'auto');
  }
});
