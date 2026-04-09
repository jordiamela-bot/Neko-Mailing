let arrDocum = [];
let mensajeokd="";
let mensajenokd="";

let myDropzoned = new Dropzone('.dropzonehtml', {
  url:'./',
  maxFilesize:100,
  maxFiles:1,
  acceptedFiles:'.html',
  addRemoveLinks:true,
  dictRemoveFile:'Eliminar'
})

myDropzoned.on('addedfile', file => {

	$('.alert-success').html('');
	$('.alert-danger').html('');
	$('.alert-success').css("display", "hide");
	$('.alert-danger').css("display", "hide");

  arrDocum.push(file);
  let not = []; 
  for(let i=0; i<arrDocum.length; i++) {

    	let imgData = new FormData();
    	imgData.append('file', arrDocum[i]);

	var pdiseno=$("#id_diseno").val();
	var pprofile=$("#id_profile").val();
	var pdatos=$("#datos").val(); 
	var pdonde=$("#id_donde").val(); 
        var pdata = new FormData();
        pdata.append('file',file);
        pdata.append('datos',pdatos);
        pdata.append('profile',pprofile);
        pdata.append('id_diseno',pdiseno);
        $.ajax({
                 type: 'post',
                 url: 'file_html.php',
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
				mensajeokd=objs.msg;
				$('.alert-success').html('<strong>'+mensajeokd+'</strong>');
				$("#myModalHTML").modal("hide");
				fichero="<iframe src='"+objs.id+"' width='100%' height='750px'></iframe>";
				$("#dropfinal3").html(fichero);
				$('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
				$("#enviar_test").removeAttr('disabled');
                                $("#enviar_ahora").removeAttr('disabled');
                                $("#programar").removeAttr('disabled');
                                $("#guardar").removeAttr('disabled');	
				$("#id_html").val(1);
				$( "#modulo_esconder" ).css('display','none');
                         } // end if
			 else
			 {
				mensajenokd=mensajenokd+' '+objs.msg;
				$('.alert-danger').html('<strong>'+mensajenokd+'</strong>');
				//$('.dropzone .dz-preview').empty();
			 }
                  },
                  error: function(response) {
                       console.log('Error en ajax '+response);
                  }
        });
  	arrDocum.splice(i,1);
  }//for
})

myDropzoned.on('complete', file => {

	//$(this).removeFile(file);
	file.previewElement.remove();

 	var ok='*'+$('.alert-danger').html()+'*'; 	
	if(ok!="**")
		$('.alert-danger').css("display", "block");
 	var ok='*'+$('.alert-success').html()+'*'; 	
	if(ok!="**")
		$('.alert-success').css("display", "block");

})

/*
myDropzone.on('removedfile', file => {
  let i = arrDocum.indexOf(file);
  arrDocum.splice(i, 1);

	var pborrar = $(this).attr("data-id");
        var pdatos=$("#datos").val();
        $.ajax({
                  type: 'get',
                  url: '../galeria/borrar_galeria.php',
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
*/
