$(document).ready(function(){
    var contador = 1;
    
    $('#btn_movil').click(function(){
 
		if(contador == 1){
			$('#opc_movil').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('#opc_movil').animate({
				left: '-100%'
			});
		}
 
	});
})