let arrDocumentos = [];
let mensajeok="";
let mensajenok="";

let myDropzone = new Dropzone('.dropzone', {
  url:'./',
  maxFilesize:100,
  maxFiles:10,
  acceptedFiles:'.pdf,.xlsx,.xls,.doc,.docx,.ods,.odt,.png,.jpg',
  addRemoveLinks:true,
  dictRemoveFile:'Eliminar'
})

myDropzone.on('addedfile', file => {

	$('.alert-success').html('');
	$('.alert-danger').html('');
	$('.alert-success').css("display", "hide");
	$('.alert-danger').css("display", "hide");

  arrDocumentos.push(file);
  let not = []; 
  for(let i=0; i<arrDocumentos.length; i++) {

    	let imgData = new FormData();
    	imgData.append('file', arrDocumentos[i]);

	var pprofile=$("#id_profile").val();
	var pdatos=$("#datos").val(); 
	var pmax=$("#id_max_files").val(); 
	var pdocu=$("#id_total_docu").val(); 

        var pdata = new FormData();
        pdata.append('file',file);
        pdata.append('datos',pdatos);
        pdata.append('profile',pprofile);
        $.ajax({
                 type: 'post',
                 url: 'file_upload.php',
                 data: pdata,
                 dataType: 'json',
                 contentType: false,
                 cache: false,
                 processData:false,
		 beforeSend: function(){
                         //$("#loading").show();
			 $("#pageloader").fadeIn("slow");
                 },
                 success: function(response){
			 $("#pageloader").fadeOut("slow");
                         var obj = JSON.stringify(response); 
                         var objs = JSON.parse(obj);
                         if (objs.estado=="1"){
				mensajeok=objs.msg;
				$('.alert-success').html('<strong>'+mensajeok+'</strong>');
				pdocu++;
				if(pdocu>=pmax) 
				{
					$('#visibledoc').css('display','none');
					$('#novisibledoc').css('display','block');
					$('#id_total_docu').val(pdocu);
				}
				else
				{
					$('#visibledoc').css('display','block');
					$('#novisibledoc').css('display','none');
					$('#id_total_docu').val(pdocu);
				}
                         } // end if
			 else
			 {
				mensajenok=mensajenok+' '+objs.msg;
				$('.alert-danger').html('<strong>'+mensajenok+'</strong>');
				//$('.dropzone .dz-preview').empty();
			 }
                  },
                  error: function(response) {
                       console.log('Error en ajax '+response);
                  }
        });
  	arrDocumentos.splice(i,1);
  }//for
})

myDropzone.on('complete', file => {

	//Borrar miniatura
	//file.previewElement.remove();
	//myDropzone.removeFile(file);

 	var ok='*'+$('.alert-danger').html()+'*'; 	
	if(ok!="**")
		$('.alert-danger').css("display", "block");
 	var ok='*'+$('.alert-success').html()+'*'; 	
	if(ok!="**")
		$('.alert-success').css("display", "block");

        var pprofile=$("#id_profile").val();
        var pdatos=$("#datos").val();
	
        $.ajax({
                  type: 'get',
                  url: 'sel_documento.php',
                  data:{profile:pprofile,datos:pdatos},
                  success: function(response){
                  	if (response!=""){
                        	$(".div_docum").html(response);
				$(".div_docum").on("click", ".borrar", function(){
                                          var element = $(this);
                                          borrar(element);
                                });
	                }
		  },
                  error: function() {
                        console.log('Error en ajax intercambio');
                  }
        });
	
})

myDropzone.on('removedfile', file => {
  let i = arrDocumentos.indexOf(file);
  arrDocumentos.splice(i, 1);

	var pborrar = $(this).attr("data-id");
        var pdatos=$("#datos").val();
	var pdocu=$("#id_total_docu").val(); 
	var pmax=$("#id_max_files").val(); 
        $.ajax({
                  type: 'get',
                  url: 'borrar_documento.php',
                  data:{pid:pborrar,datos:pdatos},
                  dataType: 'json',
                  success: function(response){
                  if (response!=""){
                         var obj = JSON.stringify(response);
                         var objs = JSON.parse(obj);
                         if (objs.estado=="1"){
                                $("#gale_"+pborrar).remove();
                                $(".myModal_body").html(objs.msg);
                                $("#myModal").modal("show");
				pdocu--;
				if(pdocu>=pmax) 
				{
					$('#visibledoc').css('display','block');
					$('#novisibledoc').css('display','none');
					$('#id_total_docu').val(pdocu);
				}
				else
				{
					$('#visibledoc').css('display','none');
					$('#novisibledoc').css('display','block');
					$('#id_total_docu').val(pdocu);
				}
				$('.alert-success').css("display", "none");
				$('.alert-danger').css("display", "none");
                         }
                   } // end if
                   },
                   error: function() {
                        console.log('Error en ajax intercambio');
                   }
        });
})

$('.borrar').click(function() {
	var pborrar = $(this).attr("data-id");
	var pnew = $(this).attr("data-new");
	var pdocu=$("#id_total_docu").val(); 
	var pmax=$("#id_max_files").val(); 
	if(pnew==0)
	{
	        var pdatos=$("#datos").val();
		$.ajax({
                  type: 'get',
                  url: 'borrar_documento.php',
                  data:{pid:pborrar,datos:pdatos},
                  dataType: 'json',
                  success: function(response){
                  if (response!=""){
                         var obj = JSON.stringify(response); 
                         var objs = JSON.parse(obj);
                         if (objs.estado=="1"){
			 	$("#docu_"+pborrar).remove();
				$(".myModal_body").html(objs.msg);
			        $("#myModal").modal("show");
				pdocu--;
				if(pdocu>=pmax) 
				{
					$('#visibledoc').css('display','none');
					$('#novisibledoc').css('display','block');
					$('#id_total_docu').val(pdocu);
				}
				else
				{
					$('#visibledoc').css('display','block');
					$('#novisibledoc').css('display','none');
					$('#id_total_docu').val(pdocu);
				}
				$('.alert-success').css("display", "none");
				$('.alert-danger').css("display", "none");
			 }
                   } // end if
                   },
                   error: function() {
                        console.log('Error en ajax intercambio');
                   }
	        });
	}
	else
	{
		$('#myModalG #id_eligal').val(pborrar);
		$("#myModalG").modal("show");
	}
})


 	$("#myModalG").on("click", "#cerrar_gal", function(){
                //cerrar modal
                $("#myModalG").hide();
                //cerrar modal
        });

	$('#elimin_gal').click(function() {
                //cerrar modal
                $("#myModalG").hide();
                //cerrar modal
		var pborrar = $('#id_eligal').val();
                var pdatos=$("#datos").val();
		var pdocu=$("#id_total_docu").val(); 
		var pmax=$("#id_max_files").val(); 
                $.ajax({
                  type: 'get',
                  url: 'borrar_documento.php',
                  data:{pid:pborrar,datos:pdatos},
                  dataType: 'json',
                  success: function(response){
                  if (response!=""){
                         var obj = JSON.stringify(response);
                         var objs = JSON.parse(obj);
                         if (objs.estado=="1"){
                                $("#docu_"+pborrar).remove();
                                $(".myModal_body").html(objs.msg);
                                $("#myModal").modal("show");
				pdocu--;
				if(pdocu>=pmax) 
				{
					$('#visibledoc').css('display','none');
					$('#novisibledoc').css('display','block');
					$('#id_total_docu').val(pdocu);
				}
				else
				{
					$('#visibledoc').css('display','block');
					$('#novisibledoc').css('display','none');
					$('#id_total_docu').val(pdocu);
				}
				$('.alert-success').css("display", "none");
				$('.alert-danger').css("display", "none");
                         }
                   } // end if
                   },
                   error: function() {
                        console.log('Error en ajax intercambio');
                   }
                });
	});

function borrar(elemento) {
        var pborrar = elemento.attr("data-id");
        var pdatos=$("#datos").val();
        var pnew = elemento.attr("data-new");
	var pdocu=$("#id_total_docu").val(); 
	var pmax=$("#id_max_files").val(); 
        if(pnew==0)
        {
        	$.ajax({
                  type: 'get',
                  url: 'borrar_documento.php',
                  data:{pid:pborrar,datos:pdatos},
                  dataType: 'json',
                  success: function(response){
                  if (response!=""){
                         var obj = JSON.stringify(response);
                         var objs = JSON.parse(obj);
                         if (objs.estado=="1"){
                                $("#docu_"+pborrar).remove();
                                $(".myModal_body").html(objs.msg);
                                $("#myModal").modal("show");
				pdocu--;
				if(pdocu>=pmax) 
				{
					$('#visibledoc').css('display','none');
					$('#novisibledoc').css('display','block');
					$('#id_total_docu').val(pdocu);
				}
				else
				{
					$('#visibledoc').css('display','block');
					$('#novisibledoc').css('display','none');
					$('#id_total_docu').val(pdocu);
				}
				$('.alert-success').css("display", "none");
				$('.alert-danger').css("display", "none");
                         }
                   } // end if
                   },
                   error: function() {
                        console.log('Error en ajax intercambio');
                   }
        	});
	}
	else
        {
                $('#myModalG #id_eligal').val(pborrar);
                $("#myModalG").modal("show");
        }
}
