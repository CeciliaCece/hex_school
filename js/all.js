$(function(){

    $('.top a').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },250);
    });

    $('.header>ul>li>a').click(function(event){
        event.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
        } ,     
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

});