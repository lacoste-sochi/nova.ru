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

      $('.centerSlider').click(function(event) {
      
        // console.log($('.centerSlider .slick-current').next());

        // console.log($(event.target).closest('.slick-slide'));

         if ( $('.centerSlider .slick-current').next().text() === $(event.target).closest('.slick-slide').text() ) {

          $('.centerSlider').slick('slickNext');

         } else if ( $('.centerSlider .slick-current').prev().text() == $(event.target).closest('.slick-slide').text() ) {

          $('.centerSlider').slick('slickPrev');

         }
        
        


      });


});