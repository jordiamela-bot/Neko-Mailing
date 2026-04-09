let arrDocumentos = [];
let mensajeokdo="";
let mensajenokdo="";

let myDropzonedo = new Dropzone('.dropzone_docu', {
  url:'./',
  maxFilesize:100,
  maxFiles:1,
  acceptedFiles:'.pdf,.xlsx,.xls,.doc,.docx,.ods,.odt,.jpg,.png',
  addRemoveLinks:true,
  dictRemoveFile:'Eliminar'
})

myDropzonedo.on('addedfile', file => {

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
                 url: 'file_upload_docu.php',
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
                                $("#myModalDoc").modal("hide");
                                seleccionar_doc(objs.id,objs.url);
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

myDropzonedo.on('complete', file => {

	file.previewElement.remove();

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

myDropzonedo.on('removedfile', file => {
  let i = arrDocumentos.indexOf(file);
  arrDocumentos.splice(i, 1);

	var pborrar = $(this).attr("data-id");
        var pdatos=$("#datos").val();
        $.ajax({
                  type: 'get',
                  url: '../documentos/borrar_documento.php',
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
                         }
                   } // end if
                   },
                   error: function() {
                        console.log('Error en ajax intercambio');
                   }
        });
})
