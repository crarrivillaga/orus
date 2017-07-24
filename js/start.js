$(document).ready(function(){
    $('.start').hide();
    
    $('#btn').click(function(){        
        $('.intro').fadeIn(1000);
        $('.intro').hide();
        $('.start').fadeIn(1000);        
        $('.start').show();
    })
})