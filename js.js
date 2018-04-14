$(document).ready(function() {

  checkMedia();

$(window).on('resize',  


        function() {

          checkMedia();
        }

  );

});


  function checkMedia() {

   
if (window.matchMedia('(max-width: 600px)').matches){

    $('.reviews').slick ({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
          });

} else {

$('.reviews').slick ({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
          });


}

   }

