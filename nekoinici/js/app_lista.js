let arrImages = [];

let myDropzone = new Dropzone('.dropzone', {
  url:'./',
  maxFilesize:2,
  maxFiles:1,
  acceptedFiles:'.xlsx, .xls, .ods',
  addRemoveLinks:true,
  dictRemoveFile:'Eliminar'
})

myDropzone.on('addedfile', file => {
  arrImages.push(file);
  let not = []; 
  for(let i=0; i<arrImages.length; i++) {

    	let imgData = new FormData();
    	imgData.append('file', arrImages[i]);

	var pprofile=$("#id_profile").val();
	var pdatos=$("#datos").val(); 
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
			$(".dropzone").css("cursor", "not-allowed");
                 },
                 success: function(response){
                         var obj = JSON.stringify(response); 
                         var objs = JSON.parse(obj);
                         if (objs.estado=="1"){
				$(".dropzone").css("cursor", "not-allowed");
			        $(".alert").addClass("alert-success"); //dropzone
			        $(".alert").removeClass("alert-danger"); //dropzone
				$('.alert').css("display", "block");
				$('.alert').html('<strong>Fichero</strong> subido correctamente</strong>');
				$('.subir_fichero').css("display", "block");
				$('#idfich').val(objs.idfich); 
				//disable the click of your clickable area
				$(".dz-hidden-input").prop("disabled",true);
                         } // end if
			 else
			 {
				$('.alert').css("display", "block");
			        $(".alert").removeClass("alert-success"); //dropzone
			        $(".alert").addClass("alert-danger"); //dropzone
				$('.alert').html('<strong>'+objs.msg+'</strong>');
				$('.subir_fichero').css("display", "none");
				//enalbe the click of your clickable area
				$(".dz-hidden-input").prop("disabled",false);
			 }
                  },
                  error: function(response) {
                       console.log('Error en ajax '+response);
                  }
               });
  	}//while
})

myDropzone.on('removedfile', file => {
  let i = arrImages.indexOf(file);
  arrImages.splice(i, 1);

  $(".dropzone").css("cursor", "pointer");
  $('.alert').css("display", "none");
  $('.subir_fichero').css("display", "none");
  //enalbe the click of your clickable area
  $(".dz-hidden-input").prop("disabled",false);

})


$('.subir_fichero').click(function () {
	$("#form_fichero").submit();
})
