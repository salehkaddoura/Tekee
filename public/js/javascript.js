 $(document).ready(function () {
      //Show or hide the sticky footer button
      $(window).scroll(function (){
            if ($(this).scrollTop() > 100) {
            	$('.go-top').fadeIn(200);
            } else {
            	$('.go-top').fadeOut(200);
            }
      });

      $('.go-top').click(function(e) {
            e.preventDefault();

            $('html, body').animate({scrollTop: 0}, 300);
      });

      $("#test1").hover(function() {
      $(this).toggleClass("enlarge");
      });

      $("#test2").hover(function() {
      $(this).toggleClass("enlarge2");
      });

      $("#test3").hover(function() {
      $(this).toggleClass("enlarge3");
      });
});