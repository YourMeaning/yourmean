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
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    //카드뷰
    $('.viewtype > i').eq(0).on('click', function(){
        $('.mobileListView').removeClass('mobileListView')
            .addClass('mobileCardView');
        $('.pcListView').removeClass('pcListView')
            .addClass('pcCardView');
        $('.pcGame > a').css('display','inline');
        if($('.mobileGame > div').last().hasClass('mobileMore')==false &&
          $('.filter > li').first().hasClass('on')){
            $('.mobileGame').append('<div class=mobileMore>더보기</div>');
            moreCount = 0;
            $('.mobileGame .game').each(function(){
                if(moreCount <= 11){
                    $(this).show();
                } else {
                    $(this).hide();
                }
                moreCount++;
            });
        };
    });
    
    //리스트뷰
    $('.viewtype > i').eq(1).on('click', function(){
        $('.mobileCardView').removeClass('mobileCardView')
            .addClass('mobileListView');
        $('.pcCardView').removeClass('pcCardView')
            .addClass('pcListView');
        $('.pcGame > a').css('display','none');
        $('.mobileMore').trigger('click');
    });
    
    //게임 필터 적용
    $('.filter > li > label').on('click', function(){
        $('label').parent('li').removeClass('on');
        $(this).parent('li').addClass('on');
        $('.mobileMore').remove();
        var i = $('.filter > li > label').index(this);
        
        if(i == 0){
            $('.game').show();
            if($('.pcGame > a').css('display')!='none'){
                $('.mobileGame').append('<div class=mobileMore>더보기</div>');
                moreCount = 0;
                $('.mobileGame .game').each(function(){
                    if(moreCount <= 11){
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                    moreCount++;
                });
            };
        } else if(i == 1){
            $('.game').hide();
            $('.top10').parents('.game').show();
        } else if(i == 2){
            $('.game').hide();
            $('.long').parents('.game').show();
        } else if(i == 3){
            $('.game').hide();
            $('.gameCate:contains(RPG)').parents('.game').show();
            $('.gameCate:contains(ACTION)').parents('.game').hide();
        } else if(i == 4){
            $('.game').hide();
            $('.gameCate:contains(ACTION)').parents('.game').show();
        } else if(i == 5){
            $('.game').hide();
            $('.gameCate:contains(AOS/MOBA)').parents('.game').show();
        } else if(i == 6){
            $('.game').hide();
            $('.gameCate:contains(FPS)').parents('.game').show();
        } else if(i == 7){
            $('.game').hide();
            $('.gameCate:contains(캐주얼)').parents('.game').show();
            $('.gameCate:contains(레이싱)').parents('.game').show();
        } else if(i == 8){
            $('.game').hide();
            $('.gameCate:contains(스포츠)').parents('.game').show();
        } else if(i == 9){
            $('.game').hide();
            $('.gameDes > .event').parents('.game').show();
        } else if(i == 10){
            $('.game').hide();
            $('.gameUpdate').parents('.game').show();
        } else if(i == 11){
            $('.game').hide();
        };
        
        //하나도 없을시 검색초기화버튼 제공 피씨
        var displayCheck = 0;
        $('.pcGameNone').remove();
        $('.mobileGameNone').remove();
        
        $('.pcCardView > .game').each(function(i){
            var gameDisplay = $('.pcCardView > .game').eq(i).css('display');
            
            if(gameDisplay == 'none'){
                displayCheck+=1;
            };
            i++;
        });
        
        $('.pcListView > .game').each(function(i){
            var gameDisplay = $('.pcListView > .game').eq(i).css('display');
            
            if(gameDisplay == 'none'){
                displayCheck+=1;
            };
            i++;
        });
        
        if(displayCheck == 33){
            $('.pcGame').append("<div class=pcGameNone><p>선택하신 조건의 검색결과가 없습니다.<br>다른 조건으로 검색해주세요.</p><p class=pcGameReset>검색초기화</p></div>");
        };
        
//        하나도 없을시 검색초기화버튼 제공 모바일
        displayCheck = 0;
        $('.mobileCardView > .game').each(function(i){
            var gameDisplay = $('.mobileCardView > .game').eq(i).css('display');
            
            if(gameDisplay == 'none'){
                displayCheck+=1;
            };
            i++;
        });
        $('.mobileListView > .game').each(function(i){
            var gameDisplay = $('.mobileListView > .game').eq(i).css('display');
            
            if(gameDisplay == 'none'){
                displayCheck+=1;
            };
            i++;
        });
        
        if(displayCheck == 23){
            $('.mobileGame').append("<div class=mobileGameNone><p>선택하신 조건의 검색결과가 없습니다.<br>다른 조건으로 검색해주세요.</p><p class=mobileGameReset>검색초기화</p></div>");
        };
    });
    
    $(document).on('click','.pcGameReset',function(){
        $('#filter_0').trigger('click');
        $('.game').show();
        $('.pcGameNone').remove();
        $('.mobileGameNone').remove();
        if($('.pcGame > a').css('display')!='none'){
            moreCount = 0;
            $('.mobileGame .game').each(function(){
                if(moreCount <= 11){
                    $(this).show();
                } else {
                    $(this).hide();
                }
                moreCount++;
            });
            $('.mobileGame').append('<div class=mobileMore>더보기</div>');
        };
    });
    $(document).on('click','.mobileGameReset',function(){
        $('#filter_0').trigger('click');
        $('.game').show();
        $('.pcGameNone').remove();
        $('.mobileGameNone').remove();
        if($('.pcGame > a').css('display')!='none'){
            moreCount = 0;
            $('.mobileGame .game').each(function(){
                if(moreCount <= 11){
                    $(this).show();
                } else {
                    $(this).hide();
                }
                moreCount++;
            });
            $('.mobileGame').append('<div class=mobileMore>더보기</div>');
        };
    });
    
    //모바일게임 더보기 버튼
    if($('.pcGame > a').css('display')!='none'){
        var moreCount = 0;
        $('.mobileGame .game').each(function(){
            if(moreCount <= 11){
                $(this).show();
            } else {
                $(this).hide();
            }
            moreCount++;
        });

        $('.mobileGame').append('<div class=mobileMore>더보기</div>');

        $(Document).on('click', '.mobileMore', function(){
            $(this).remove();
            $('.mobileGame .game').show();
            docHeight = $(document).height();
            posFooter = $('#footer').offset().top;
        })
    };
    
    //네비게이션
    var posVisual = $('.visual').offset().top;
    var docHeight = $(document).height();
    var posFooter = $('#footer').offset().top;
    var windowHeight = $(window).height();
    $(window).on('resize', function(){
        windowHeight = $(window).height();
    });
    
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll <= posVisual){
            $('.navi').fadeOut();
        } else if(scroll >= posVisual && scroll + windowHeight <= posFooter){
            $('.navi').fadeIn();
            $('.navi').removeClass('scrollBot');
        } else if(scroll + windowHeight >= posFooter){
            $('.navi').addClass('scrollBot');
        }
    });
    
});