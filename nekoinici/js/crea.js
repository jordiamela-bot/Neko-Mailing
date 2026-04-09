let arrImages = [];
let mensajeok="";
let mensajenok="";

let myDropzone = new Dropzone('.dropzone', {
  url:'./',
  maxFilesize:100,
  maxFiles:1,
  acceptedFiles:'.jpg,.jpeg,.png',
  addRemoveLinks:true,
  dictRemoveFile:'Eliminar'
})

myDropzone.on('addedfile', file => {

	$('.alert-success').html('');
	$('.alert-danger').html('');
	$('.alert-success').css("display", "hide");
	$('.alert-danger').css("display", "hide");

  arrImages.push(file);
  let not = []; 
  for(let i=0; i<arrImages.length; i++) {

    	let imgData = new FormData();
    	imgData.append('file', arrImages[i]);

	var pprofile=$("#id_profile").val();
	var pdatos=$("#datos").val(); 
	var pdonde=$("#id_donde").val(); 
	var pmax=$("#id_max_files_gal").val();
        var pgale=$("#id_total_gal").val();

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
				$("#myModalImagen").modal("hide");
				seleccionar(objs.id,objs.width);
				pgale++;
                                if(pgale>=pmax)
                                {
                                        $('#visiblegal').css('display','none');
                                        $('#novisiblegal').css('display','block');
                                        $('#id_total_gal').val(pgal);
                                }
                                else
                                {
                                        $('#visiblegal').css('display','block');
                                        $('#novisiblegal').css('display','none');
                                        $('#id_total_gal').val(pgal);
                                }
                         } // end if
			 else
			 {
				//mensajenok=mensajenok+' '+objs.msg;
				mensajenok=objs.msg;
				$('.alert-danger').html('<strong>'+mensajenok+'</strong>');
				$('.alert-danger').css("display", "block");
				//$('.dropzone .dz-preview').empty();
			 }
                  },
                  error: function(response) {
                       console.log('Error en ajax '+response);
                  }
        });
  	arrImages.splice(i,1);
  }//for
})

myDropzone.on('complete', file => {

	//$(this).removeFile(file);
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
                  url: 'sel_galeria.php',
                  data:{profile:pprofile,datos:pdatos},
                  success: function(response){
                  	if (response!=""){
                        	$(".div_galeria").html(response);
				$(".div_galeria").on("click", ".borrar", function(){
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
  let i = arrImages.indexOf(file);
  arrImages.splice(i, 1);

	var pborrar = $(this).attr("data-id");
        var pdatos=$("#datos").val();
	var pgal=$("#id_total_gal").val();
        var pmax=$("#id_max_files_gal").val();

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
				pgal--;
                                if(pgal>=pmax)
                                {
                                        $('#visiblegal').css('display','block');
                                        $('#novisiblegal').css('display','none');
                                        $('#id_total_gal').val(pgal);
                                }
                                else
                                {
                                        $('#visiblegal').css('display','none');
                                        $('#novisiblegal').css('display','block');
                                        $('#id_total_gal').val(pgal);
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
