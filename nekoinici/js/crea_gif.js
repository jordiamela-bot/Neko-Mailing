let arrImages_gif = [];
let mensajeok_gif="";
let mensajenok_gif="";

let myDropzone_gif = new Dropzone('.dropzone_gif', {
  url:'./',
  maxFilesize:100,
  maxFiles:1,
  acceptedFiles:'.gif',
  addRemoveLinks:true,
  dictRemoveFile:'Eliminar'
})

myDropzone_gif.on('addedfile', file => {

	$('.alert-success').html('');
	$('.alert-danger').html('');
	$('.alert-success').css("display", "hide");
	$('.alert-danger').css("display", "hide");

  arrImages_gif.push(file);
  let not = []; 
  for(let i=0; i<arrImages_gif.length; i++) {

    	let imgData = new FormData();
    	imgData.append('file', arrImages_gif[i]);

	var pprofile=$("#id_profile").val();
	var pdatos=$("#datos").val(); 
	var pdonde=$("#id_donde").val(); 
        var pdata = new FormData();
        pdata.append('file',file);
        pdata.append('datos',pdatos);
        pdata.append('profile',pprofile);
        $.ajax({
                 type: 'post',
                 url: 'file_upload_gif.php',
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
				mensajeok_gif=objs.msg;
				$('.alert-success').html('<strong>'+mensajeok_gif+'</strong>');
				$("#myModalImg_gif").modal("hide");
				seleccionar_gif(objs.id,objs.width);
                         } // end if
			 else
			 {
				mensajenok_gif=mensajenok_gif+' '+objs.msg;
				$('.alert-danger').html('<strong>'+mensajenok_gif+'</strong>');
				//$('.dropzone .dz-preview').empty();
			 }
                  },
                  error: function(response) {
                       console.log('Error en ajax '+response);
                  }
        });
  	arrImages_gif.splice(i,1);
  }//for
})

myDropzone_gif.on('complete', file => {

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
                  url: 'sel_galeria_gif.php',
                  data:{profile:pprofile,datos:pdatos},
                  success: function(response){
                  	if (response!=""){
                        	$(".div_galeria_gif").html(response);
				$(".div_galeria_gif").on("click", ".borrar", function(){
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

myDropzone_gif.on('removedfile', file => {
  let i = arrImages_gif.indexOf(file);
  arrImages_gif.splice(i, 1);

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
