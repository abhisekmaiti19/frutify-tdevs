$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".slider").slider({ full_width: true });
   
  
    $(".myreviews").carousel({
      numVisible: 7,
      shift: 55,
      padding: 55,
    });
  
    $(".modal").modal();
    $(".parallax").parallax();
  
    $(".carousel.carousel-slider.myslider").carousel({
      fullWidth: true,
      indicators: true,
    });
  });

        