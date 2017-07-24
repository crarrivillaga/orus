$(document).ready(function(){
    $('.mision').hide();
    $('.vision').hide();
    
    $('.o-know').click(function(){
        $('.know').fadeIn(1000);
        $('.know').show();
        $('.mision').hide();
        $('.vision').hide();
        $('.o-vision').removeClass('active');
        $('.o-mision').removeClass('active');
        $('.o-know').addClass('active');
        
    });
    
    $('.o-mision').click(function(){
        $('.mision').fadeIn(1000);
        $('.mision').show();
        $('.vision').hide();
        $('.know').hide();
        $('.o-know').removeClass('active');
        $('.o-vision').removeClass('active');
        $('.o-mision').addClass('active');
        
    });
    
    $('.o-vision').click(function(){
        $('.vision').fadeIn(1000);
        $('.vision').show();
        $('.mision').hide();
        $('.know').hide();
        $('.o-know').removeClass('active');
        $('.o-mision').removeClass('active');
        $('.o-vision').addClass('active');
        
    });
});