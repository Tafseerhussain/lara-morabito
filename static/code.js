  // $(document).ready(function(){});
    $('.press-cards-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:500,
        arrows: false,
        infinite: false,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
              }
            },
            {
              breakpoint: 850,
              settings: {
                  slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
            },
        ]
    });

    function lightboxGallery(id) {
      $('.gallery-slider-overlay').delay(0).fadeIn("slow");
      $('.gallery-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: id,
          speed:500,
          infinite: false,
          centerMode: true,
          centerPadding: '24%',
          dots: false,
          arrows: true,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1681,
              settings: {
                  centerPadding: '20%',
              }
            },
            {
              breakpoint: 1451,
              settings: {
                  centerPadding: '24%',
              }
            },
            {
              breakpoint: 576,
              settings: {
                  centerPadding: '20%',
              }
            },
            {
              breakpoint: 499,
              settings: {
                  centerPadding: '15%',
              }
            },
          ]
      });
      $('.gallery-slider').slick('slickGoTo', parseInt(id), true);
    }

    function closeGallery() {
      $('.gallery-slider-overlay').delay(0).fadeOut("fast");
      setTimeout(function () {
        $('.gallery-slider').slick('unslick');
      }, 500);
    }