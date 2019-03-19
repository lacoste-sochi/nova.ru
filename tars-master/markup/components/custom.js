$(document).ready(function() {
    $('.centerSlider').slick({
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        nextArrow: '<div class="nextar"><img src="static/img/content/arrowSlider.png"/></div>',
        prevArrow: '<div class="prevar"><img src="static/img/content/arrowSlider.png"/></div>',
        dots: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 1
            }
          }
        ]
      });

      $('.newsSlider').slick({
        arrows: true,
        nextArrow: '<div class="nextar"><img src="static/img/content/arrowSlider.png"/></div>',
        prevArrow: '<div class="prevar"><img src="static/img/content/arrowSlider.png"/></div>',
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 1
            }
          }
        ]
      });

});