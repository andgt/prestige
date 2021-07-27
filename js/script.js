/*$('.floors').hover (
  function() {
    $('.apartment__popup').fadeIn();
  },
  function() {
    $('.apartment__popup').fadeOut(50);
  }
);*/

  $('.floors').each(function() {
  let ths = $(this);
  ths.hover(
    function() {
      $('.apartment__popup').fadeIn();
    },
    function() {
      $('.apartment__popup').fadeOut(50);
    })
});
