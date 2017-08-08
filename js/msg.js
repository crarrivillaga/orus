$(document).ready(function(){
    
    $('form').submit(function(e){
        e.preventDefault();
        //si esto no se coloca, el formulario se procesara por separado, por jquery y por el proceso del formulario en si.
        
        var data = $(this).serializeArray();
        data.push({name: 'tag', value: 'contact'});
        
        $.ajax({
            url: 'contact_form.php', //archivo donde se procesaran los datos
            type: 'post',
            dataType: 'json',
            data: data //nombre variable
        })
        
        .done(function() { //if
            $('#info_msg').html("Mensaje enviado correctamente.");
            $('#info_msg').css(
            'background':'#3a9d3a',
            'color':'#225722'
            );
        })
        
        .fail(function() { //else
            $('#info_msg').html("Vaya! Parece que hubo un error.");
            $('#info_msg').css(
            'background':'#9d3a3a',
            'color':'#572222'
            );
        })

        /*las funciones .done y .fail, actuan como un if-else*/
    })
    
});