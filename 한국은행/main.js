$(document).ready(function(){
    
//    헤더스크롤
    var pos1 = $('#content_0').offset().top;
    
    $(window).on('scroll',function(){
        
        if($(window).scrollTop()>pos1-50){
            $('#header .bot').addClass('on');
        } else{
            $('#header .bot').removeClass('on');
        }
        
    });
    
    $('#header>.bot>ul>li').on('mouseenter', function(){
       
        $(this).children('.second_menu').css('display','block');
        
    });
    
    $('#header>.bot>ul>li').on('mouseleave', function(){
       
        $(this).children('.second_menu').css('display','none');
        
    });
    
    
    /*  보도자료/공지사항/통계공표일정  */
    
    $('.title_1').on('click',function(){
        $('.press_release').show();
        $('.notice').hide();
        $('.announcement').hide();
        $('.title_1').css({"font-weight": "bold","color": "#222"});
        $('.title_2').css({"font-weight": "normal","color": "#7d8eaa"});
        $('.title_3').css({"font-weight": "normal","color": "#7d8eaa"});
    }); 
    $('.title_2').on('click',function(){
        $('.press_release').hide();
        $('.notice').show();
        $('.announcement').hide();
        $('.title_1').css({"font-weight": "normal","color": "#7d8eaa"});
        $('.title_2').css({"font-weight": "bold","color": "#222"});
        $('.title_3').css({"font-weight": "normal","color": "#7d8eaa"});
    });
    $('.title_3').on('click',function(){
        $('.press_release').hide();
        $('.notice').hide();
        $('.announcement').show();
        $('.title_1').css({"font-weight": "normal","color": "#7d8eaa"});
        $('.title_2').css({"font-weight": "normal","color": "#7d8eaa"});
        $('.title_3').css({"font-weight": "bold","color": "#222"});
    });
    $('.title_1').trigger('click');
    
    
    /*  bx slider  */
    
    $('.slider').bxSlider({
        auto: true,
        autoControls: true,
//        stopAutoOnClick: true, 창을 안띄우고 있어도 스크롤?
        pager: true,
        controls:false,
        pause: 4000,
        mode:'fade'
    });
    
    $('.bx-start').hide();
    $('.bx-stop').show();
    
    $('.bx-controls').on('click',function(){
        if($('.bx-start').hasClass('active')){
            $('.bx-start').hide();
            $('.bx-stop').show();
        } else{
            $('.bx-start').show();
            $('.bx-stop').hide();
        };
    });
    
    
});


