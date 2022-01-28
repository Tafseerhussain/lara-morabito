function changeSlidesTown() {
	$(".carousel-data-change").fadeOut(0);
	setTimeout(
	  	function () {
	   	 	$('.carousel-data-change').html('<div class="carousel-item active"> <img src="assets/img/town/town1.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/town/town2.jpg" class="d-block w-100" alt="..."> </div><div class="carousel-item"><img src="assets/img/town/town3.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/town/town4.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/town/town5.jpg" class="d-block w-100" alt="..."></div>');
	  	}, 0);
	$(".carousel-data-change").fadeIn(0);
}
function changeSlidesEstate() {
	$(".carousel-data-change").fadeOut(0);
	setTimeout(
	  	function () {
	   	 	$('.carousel-data-change').html('<div class="carousel-item active"> <img src="assets/img/estate/estate1.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/estate/estate2.jpg" class="d-block w-100" alt="..."> </div><div class="carousel-item"><img src="assets/img/estate/estate3.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/estate/estate4.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/estate/estate5.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/estate/estate6.jpg" class="d-block w-100" alt="..."></div>');
	  	}, 0);
	$(".carousel-data-change").fadeIn(0);
}
function reverBackSlides() {
	$(".carousel-data-change").fadeOut(0);
	setTimeout(
	  	function () {
			$('.carousel-data-change').html('<div class="carousel-item active"> <img src="assets/img/default/default1.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/default/default2.jpg" class="d-block w-100" alt="..."> </div><div class="carousel-item"><img src="assets/img/default/default3.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/default/default4.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="assets/img/default/default5.jpg" class="d-block w-100" alt="..."></div>');
	  	}, 0);
	$(".carousel-data-change").fadeIn(0);
}
var myCarousel = document.querySelector('#home-slider')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  pause: false
})

$(document).ready(function(){
	$('.category-slider').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
			speed:500,
			infinite: false,
	  	centerMode: true,
	  	centerPadding: '34%',
	  	dots: true,
	  	autoplay: true,
	  	variableWidth: true,
	    // swipe: false,
	  	responsive: [
		    {
			    breakpoint: 1585,
			    settings: {
			        centerPadding: '30%',
			    }
		    },
		    {
			    breakpoint: 768,
			    settings: {
			        centerMode: false,
			    }
		    },
		]
	  });
});