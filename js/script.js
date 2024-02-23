$(document).ready(function(){
    $('.scrollArrow').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50}, 300, 'linear');
      });
      AOS.init();
})