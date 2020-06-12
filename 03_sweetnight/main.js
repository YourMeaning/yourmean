$(document).ready(function(){
    
    $('.membership_class > li').on('click', function(){
        var i = $(this).index();
        $('.membership_benefit > li').removeClass('on');
        $('.membership_benefit > li').eq(i).addClass('on');
        
    });
    $('.membership_class>li').eq(0).trigger('click');
    
    //map
    var mapOptions = {
        center: new naver.maps.LatLng(35.2300765,128.6781711,17),
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: true,
        zoom: 15
    };
    var map = new naver.maps.Map('map', mapOptions);
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.2300765,128.6781711,17),
        map: map
    });
    
    $(document).on('scroll', function(){
        var windowtop = $(window).scrollTop();  
        if(windowtop<=200){
                $('#visual > h3').addClass('on');
            }else{
                $('#visual > h3').removeClass('on');
            }
    });
    $(document).trigger('scroll');

    //manu
    $('.gnb_btn').on('click', function(){
        $('.gnb_box').fadeToggle();
        $('.gnb_outbox').fadeToggle();
    });
    $('.gnb_outbox').on('click', function(){
        $('.gnb_box').fadeToggle();
        $('.gnb_outbox').fadeToggle();
    });
    $('.gnb_box > li > p').on('click', function(){
        $(this).siblings('.gnb_second').slideToggle();
    });

});