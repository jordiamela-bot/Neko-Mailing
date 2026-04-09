function div_select(ptipo)
{
	var pdatos=$('#datos').val();
	if(ptipo==1)
		var psel=$('#sel_nom').val();
	else
		if(ptipo==2)
			var psel=$('#sel_dire').val();
		else
			if(ptipo==3)
				var psel=$('#sel_tele').val();

        $.ajax({
                type: 'post',
                url: 'div_select.php',
                data:{datos:pdatos,tipo:ptipo,sele:psel},
                success: function(response){
                        console.log(response);
                        valor=response.split("|");
			if(ptipo==1)
			{
	                        $("#sel_dire").html(valor[0]);
	                        $("#sel_tele").html(valor[1]);
			}
			else 
			{
				if(ptipo==2)
				{
		                        $("#sel_nom").html(valor[0]);
	        	                $("#sel_tele").html(valor[1]);
				}
				else
				{
					if(ptipo==3)
					{
			                        $("#sel_nom").html(valor[0]);
	        		                $("#sel_dire").html(valor[1]);
					}
				}
			}
                },
                error: function() {
                        console.log('Error en ajax intercambio');
                }
          });

}

$(".crear_fichero").click(function(){
	$("#myModal2").modal("show");
})
