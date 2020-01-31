$(document).ready(function(){
    
    var swiper = new Swiper('.swiper-container', {
        effect : 'fade',
        loof : true,
        autoplay: {
            delay : 5000,
            disableOnInteraction : false,
        },
        allowTouchMove : false,
        // 네비게이션
        navigation : { 
            prevEl : '.swiper-button-prev',
            nextEl : '.swiper-button-next',
        },
        // 페이징
        pagination : { 
            el : '.swiper-pagination',
            type : 'custom',
            clickable : true,
        },
        
    });
    
    
    $('.swiper-wrapper').on('mouseenter',function(){
        swiper.autoplay.stop();
    });
    $('.swiper-wrapper').on('mouseleave',function(){
        swiper.autoplay.start();
    });
});
