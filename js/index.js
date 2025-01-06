window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled-header');
    } else {
      header.classList.remove('scrolled-header');
    }
  });


  $(document).ready(function(){
    $('.review-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000, // change the speed (in ms)
      dots: true, // display navigation dots
      arrows: true, // show navigation arrows
      prevArrow: '<button type="button" class="slick-prev">←</button>', // Custom left arrow
      nextArrow: '<button type="button" class="slick-next">→</button>', // Custom right arrow
      infinite: true, // infinite scrolling
      speed: 500, // transition speed
      slidesToShow: 1, // show 1 review at a time
      slidesToScroll: 1, // scroll 1 review at a time
    });
  });
  
