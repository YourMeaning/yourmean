$(document).ready(function(){
    
    $('.membership_class > li').on('click', function(){
        var i = $(this).index();
        $('.membership_benefit > li').removeClass('on');
        $('.membership_benefit > li').eq(i).addClass('on');
        
    });
    $('.membership_class>li').eq(1).trigger('click');
    
    //map
    var mapOptions = {
        center: new naver.maps.LatLng(14347682.8596544,4194871.2782619),
        zoom: 20
    };
    var map = new naver.maps.Map('map', mapOptions);
    
    
});