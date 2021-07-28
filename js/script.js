$('.floors').hover (
  function() {
    $('.apartment__popup').fadeIn();
  },
  function() {
    $('.apartment__popup').fadeOut(50);
  }
);

$(document).ready(function(){
  $('.img_wr').mousemove(function(e){
    // положение элемента
    let pos = $(this).offset();
    let elem_left = pos.left;
    let elem_top = pos.top;
    // положение курсора внутри элемента
    let Xinner = e.pageX - elem_left;
    let Yinner = e.pageY - elem_top;
    if (Xinner < 466) {
      $('.apartment__popup').css('right','180px');
    } else {
      $('.apartment__popup').css('right','760px');
    }
  });
});
