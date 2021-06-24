


const menutoggle = document.querySelector('.menu-toggle');
const navmenu = document.querySelector('.nav-menu');

menutoggle.addEventListener('click', () => {
    navmenu.classList.toggle('show');
});


// $(document).ready(function(){ //when document(DOM) loads completely
//     $('.demo').owlCarousel({ //owlCarousel settings
//         autoplay: true, //set to false to turn off autoplay and only use nav
//         autoplayHoverPause: true, //set to false to prevent pausing on hover
//         loop: true, //set to false to stop carousel after all slides shown
//         autoplayTimeout: 8000, //time between transitions
//         smartSpeed: 1200, //transition speed
//         dotsSpeed: 1000, //transition speed when using dots/buttons
//         responsive : { //set number of items shown per screen width
//             0 : {
//                 items: 1 //0px width and up display 1 item
//             },
//             768 : {
//                 items: 2 //768px width and up display 2 items
//             },
//             992 : {
//                 items: 3 //992px width and up display 3 items
//             }
//         }
//     });
//   });
var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
  });
  
  var $imgs = $carousel.find('.carousel-cell img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });
  