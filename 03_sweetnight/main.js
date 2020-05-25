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
    var map = new naver.maps.map('map', mapOptions);
    var marker = new naver.maps.marker({
        position: new naver.maps.LatLng(35.2300765,128.6781711,17),
        map: map
    });
    var contentString = [
            '<div class="iw_inner">',
            '   <h3>단밤</h3>',
            '   <p>서울특별시 서울구 서울대로13길 24(서울동)<br />',
            '       <img src="img/icon.png" width="55" height="55" alt="단밤" class="logo" /><br />',
            '       1234-0000<br />',
            '       <a href="https://yourmeaning.github.io/yourmean/03_sweetnight/index.html" target="_blank">https://yourmeaning.github.io/yourmean/03_sweetnight</a>',
            '   </p>',
            '</div>'
        ].join('');

    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });

    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });

    infowindow.open(map, marker);

});