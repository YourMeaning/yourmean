$(document).ready(function(){
    $('.login').on('submit', function(){
        var id = $('#id').val();
        var pw = $('#pw').val();
        if(id != '' && pw != ''){
            window.location.href = 'sub/sub';
        }
        
    })
    
    
    
    
    
}