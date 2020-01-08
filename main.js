$(document).ready(function(){
    
    //메뉴 나타나기
    $('.gnbLeft').on('click', function(){
        $('.gnbMenu').show();
        $('.gnbMenu').css('margin-left','0');
        $('body').append("<div class=gnbMenuBack></div>");
    });
    
    //메뉴 없어지기
    $('.gnbMenuClose').on('click', function(){
        $('.gnbMenu').fadeOut();
        $('.gnbMenu').css('margin-left','-440px');
        $('.gnbMenuBack').remove();
    });
    
    $(document).on('click', '.gnbMenuBack', function(){
        $('.gnbMenu').fadeOut();
        $('.gnbMenu').css('margin-left','-440px');
        $('.gnbMenuBack').remove();
    });
    
    //툴팁 없어지기
    $('.tooltip>i').on('click', function(){
        $(this).parents('.tooltip').hide();
    });
    
    //전체게임 뷰타입 바꾸기
    $('.viewtype > i').on('click', function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });
    
    //게임 필터 적용
    $('.filter > li > label').on('click', function(){
        $('label').parent('li').removeClass('on');
        $(this).parent('li').addClass('on');
        var i = $('.filter > li > label').index(this);
        
        if(i == 0){
            
        };
    });
    
    
    
    
});