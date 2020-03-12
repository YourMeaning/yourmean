$(document).ready(function(){
    
    $('.nav > li').on('click', function(){
        var i = $(this).index();
        $('.content').hide();
        $('.content').eq(i).show();
    })
    
    
    $('.notice_list > li').on('click', function(){
        var i = $(this).index();
        $('.board > li').hide();
        $('.board > li').eq(i).show();
    });
    
    $('#major').on('change', function(){
        var i = $('#major option:selected').val();
        $('.class_list tr').hide();
        if($('.list_major').html() == i){
            $(this).parents('tr').show();
        }
        alert(i);
    });

    
    
    
    
    
});