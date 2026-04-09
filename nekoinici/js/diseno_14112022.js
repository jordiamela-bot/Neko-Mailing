
	$("#tab_config").on("click", function(){
		//deshabilitar();
		$("#guardar_config").attr('disabled','true');
	});

	$("#config").on("change","#id_background", function(){
                color=$("#id_background").val();
                $("#dropfinal3").css("background-color", color);
		$(".mov_modulos").css("background-color", color);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });

	$("#config").on("input","#id_background", function(){
                color=$("#id_background").val();
                $("#dropfinal3").css("background-color", color);
		$(".mov_modulos").css("background-color", color);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });

        $("#config").on("change","#id_tipo_letra", function(){
                letra=$("#id_tipo_letra").val();
                $("#dropfinal3").css("font-family", letra);
                $(".mov_modulos").css("font-family", letra);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });

        $("#config").on("change","#id_tamano_letra", function(){
                tamano=$("#id_tamano_letra").val()+"px"; 
                $("#dropfinal3").css("font-size", tamano);
                $(".mov_modulos").css("font-size", tamano);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });
        
        $("#config").on("change","#id_color_letra", function(){
                color=$("#id_color_letra").val();
                $("#dropfinal3").css("color", color);
                $(".mov_modulos").css("color", color);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });
        $("#config").on("input","#id_color_letra", function(){
                color=$("#id_color_letra").val();
                $("#dropfinal3").css("color", color);
                $(".mov_modulos").css("color", color);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });

        $("#config").on("change","#id_left", function(){
                //$('#termcond').prop('checked')
                alinea=$("#id_left").val(); 
                $("#dropfinal3").css("text-align", alinea);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });
        $("#config").on("change","#id_right", function(){
                alinea=$("#id_right").val(); 
                $("#dropfinal3").css("text-align", alinea);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });
        $("#config").on("change","#id_center", function(){
                alinea=$("#id_center").val(); 
                $("#dropfinal3").css("text-align", alinea);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });
        $("#config").on("change","#id_justify", function(){
                alinea=$("#id_justify").val(); 
                $("#dropfinal3").css("text-align", alinea);
		deshabilitar();
		$("#guardar_config").removeAttr('disabled');
        });

	function deshabilitar()
	{
		//Deshabilitar que pueda hacer otras cosas en el diseño
		$(".mov_modulos").css("pointer-events","none");
		$(".mov_modulos").css("opacity","0.4");
		//Deshabilitar HTML Propio
		$("#boton_html").css("pointer-events","none");
		$("#boton_html").css("opacity","0.4");
		//Deshabilitar Boton Diseño
		$("#tab_diseno").css("pointer-events","none");
		$("#tab_diseno").css("opacity","0.4");
		//Deshabilitar Ayuda
		$("#tab_ayuda").css("pointer-events","none");
		$("#tab_ayuda").css("opacity","0.4");
	}
	function habilitar()
	{
		//Habilitar que pueda hacer otras cosas en el diseño
		$("#dropfinal3").css("opacity","1");
		$(".mov_modulos").css("pointer-events","auto");
		$(".mov_modulos").css("opacity","1");
		//habilitar HTML Propio
		$("#boton_html").css("pointer-events","auto");
		$("#boton_html").css("opacity","1");
		//habilitar Boton Diseño
		$("#tab_diseno").css("pointer-events","auto");
		$("#tab_diseno").css("opacity","1");
		//habilitar Boton Diseño
		$("#tab_ayuda").css("pointer-events","auto");
		$("#tab_ayuda").css("opacity","1");
	}

	function editar_general()
	{
		valor=$(this).attr('id');
		valors='#'+valor;
                tipo=$(valors).attr('data-tipo'); 
                linea=$(valors).attr('data-quien');
		console.log('Valor '+valor+' Tipo '+tipo+' linea '+linea);
                $('.mov_modulos').css('border', '0px');
                $(valors).css('border', '2px solid #646464');
                if(tipo=="dividir")
                {
                                $('.nav-tabs #tab_config').css('display', 'none');
                                $('.nav-tabs #tab_modulos_dividir').tab('show');
                                ptop=$(valors).find('hr').css("margin-top");
                                len=ptop.length-2;
                                ptop=ptop.substr(0,len); console.log('top '+ptop);
                                pbottom=$(valors).find('hr').css("margin-bottom");
                                len=pbottom.length-2;
                                pbottom=pbottom.substr(0,len); console.log('top '+pbottom);
                                pcolor_linea1=$(valors).find('hr').css("background-color"); console.log('linea color '+pcolor_linea1);
                                pcolor_linea=dev_color(pcolor_linea1);
                                pheight=$(valors).find('hr').css('height'); console.log('height '+pheight);
                                len=pheight.length-2;
                                pheight=pheight.substr(0,len); console.log('top '+pheight);
                                $("#id_color_linea").val(pcolor_linea);
                                $("#id_padding_top").val(ptop);
                                $("#id_padding_bottom").val(pbottom);
                                $("#id_linea_height_linea").val(pheight);
                                $('#id_quien_dividir').val(valor);
                                $('#id_linea_dividir').val(linea);
                                deshabilitar();
                }
		else
		{
			 if(tipo=="boton")
	                 {
                                $('.nav-tabs #tab_config').css('display', 'none');
                                $('.nav-tabs #tab_modulos_boton').tab('show');
                                pcolor_texto1=$(valors).find('button').css("color");
                                pcolor_texto=dev_color(pcolor_texto1);
                                pcolor_boton1=$(valors).find('button').css("background-color");
                                pcolor_boton=dev_color(pcolor_boton1);
                                ptexto_boton=$(valors).find('button').html();
                                purl_boton = $(valors).find('button').attr('data-link_boton'); 
                                console.log('bot '+pcolor_texto+' '+pcolor_boton+' '+ptexto_boton);
                                console.log('bot url '+purl_boton);
                                $("#id_texto_boton").val(ptexto_boton);
                                $("#id_url_boton").val(purl_boton);
                                $("#id_color_boton").val(pcolor_boton);
                                $("#id_color_texto").val(pcolor_texto);
                                $('#id_quien_boton').val(valor);
                                $('#id_linea_boton').val(linea);
                                deshabilitar();
        	        }
			else
			{
				 if(tipo=="texto")
		                 {
		                        $('.nav-tabs #tab_config').css('display', 'none');
                		        $('.nav-tabs #tab_modulos_texto').tab('show');
		                        ptexto=$(valors).find('span').html();
		                        tinymce.get('id_mensaje').setContent(ptexto);
		                        $('#id_quien_texto').val(valor); 
		                        $('#id_linea_texto').val(linea);
		                        $('#id_donde').val("texto");
		                        deshabilitar();
                		}
				else
				{
					if(tipo=="imagen")
                                        {
                                                $('.nav-tabs #tab_config').css('display', 'none');
                                                $('.nav-tabs #tab_modulos_imagen').tab('show');
                                                pimagen=$(valors).find('img').attr("src"); console.log("img "+pimagen);
                                                plink_imagen=$(valors).find('img').data('link_imagen');
                                                palt_imagen=$(valors).find('img').attr("alt");
                                                palinear_imagen=$(valors).find('img').data("alinear_imagen"); console.log('alinear '+palinear_imagen);
                                                pwidth=$(valors).find('img').data("width");
                                                pid=$(valors).find('img').data("ids");
                                                ptanto=$(valors).find('img').data("tanto");
                                                $("#imagen_modulo").attr("src",pimagen);
                                                $("#id_link_imagen").val(plink_imagen);
                                                $("#id_alt_imagen").val(palt_imagen);
                                                $("input[name=id_alinear][value='"+palinear_imagen+"']").attr("checked",true);
                                                $("#width_img").val(pwidth);
                                                $("#id_width").val(ptanto);
                                                $("#id_id").val(pid);
                                                $('#id_quien_imagen').val(valor);
                                                $('#id_linea_imagen').val(linea);
                                                $('#id_donde').val("imagen_modulo");
                                                deshabilitar();
                                        }
					else
					{
						 if(tipo=="espacio")
                                                 {
                                                         $('.nav-tabs #tab_config').css('display', 'none');
                                                         $('.nav-tabs #tab_modulos_espacio').tab('show');
                                                         pline=$(valors).find('p').css('height');
                                                         len=pline.length-2;
                                                         pline=pline.substr(0,len); console.log('top '+pline);
                                                         varios=pline.split('px'); pline=varios[0];
                                                         $("#id_line_height").val(pline);
                                                         $('#id_quien_espacio').val(valor);
                                                         $('#id_linea_espacio').val(linea);
                                                         deshabilitar();
                                                 }
						else
						{
							if(tipo=="web_email")
                                                        {
                                                                 $('.nav-tabs #tab_config').css('display', 'none');
                                                                 $('.nav-tabs #tab_modulos_web_email').tab('show');
                                                                 pweb=$(valors).find('img').data("web");
                                                                 pemail=$(valors).find("div img:eq(1)").data('email'); //para seleccionar la segunda imagen
                                                                 $('#id_quien_web_email').val(valor);
                                                                 $('#id_linea_web_email').val(linea);
                                                                 $("#id_url_web").val(pweb);
                                                                 $("#id_url_email").val(pemail);
                                                                 deshabilitar();
                                                        }
							else
							{
								if(tipo=="redes_sociales")
                                                                {
                                                                        $('.nav-tabs #tab_config').css('display', 'none');
                                                                        $('.nav-tabs #tab_modulos_redes_sociales').tab('show');
                                                                        //pfac=$(valors).find('img').data("facebook");
                                                                        pfac=$(valors+' #redes').data("facebook");
                                                                        $("#id_facebook").val(pfac);
                                                                        pfac=$(valors+' #redes').data("twitter");
                                                                        $("#id_twitter").val(pfac);
                                                                        pfac=$(valors+' #redes').data("instagram");
                                                                        $("#id_instagram").val(pfac);
                                                                        pfac=$(valors+' #redes').data("linkedin");
                                                                        $("#id_linkedin").val(pfac);
                                                                        pfac=$(valors+' #redes').data("youtube");
                                                                        $("#id_youtube").val(pfac);
                                                                        pfac=$(valors +' #redes').data("pinterest");
                                                                        $("#id_pinterest").val(pfac);
                                                                        pfac=$(valors +' #redes').data("bandcamp");
                                                                        $("#id_bandcamp").val(pfac);
                                                                        pfac=$(valors +' #redes').data("soundcloud");
                                                                        $("#id_soundcloud").val(pfac);
                                                                        pfac=$(valors +' #redes').data("vimeo");
                                                                        $("#id_vimeo").val(pfac);
                                                                        pfac=$(valors +' #redes').data("flickr");
                                                                        $("#id_flickr").val(pfac);
                                                                        pfac=$(valors +' #redes').data("spotify");
                                                                        $("#id_spotify").val(pfac);
                                                                        $('#id_quien_redes_sociales').val(valor);
                                                                        $('#id_linea_redes_sociales').val(linea);
                                                                        deshabilitar();
                                                                }
								else
								{
									if(tipo=="imagen_texto")
			                                                {
                        			                                $('.nav-tabs #tab_config').css('display', 'none');
			                                                        $('.nav-tabs #tab_modulos_imagen_texto').tab('show');
										$('#config_modulos_imagen_texto').scrollTop(0);
                        			                                ptexto=$(valors).find('span:eq(0)').html(); console.log('texto '+ptexto+' '+valor+' '+linea);
			                                                        tinymce.get('id_mensaje_imt').setContent(ptexto);

                        			                                pimagen=$(valors).find('img').attr("src"); console.log("img "+pimagen);
			                                                        plink_imagen=$(valors).find('img').data('link_imagen');
			                                                        palt_imagen=$(valors).find('img').attr("alt");
			                                                        palinear_imagen=$(valors).find('img').data("alinear_imagen"); console.log('alinear '+palinear_imagen);
			                                                        pwidth=$(valors).find('img').data("width");
			                                                        pid=$(valors).find('img').data("ids");
			                                                        ptanto=$(valors).find('img').data("tanto");
			                                                        pposi=$(valors).find('img').data("posicion"); //OJO
			                                                        console.log('PPOSI: '+pposi);
			                                                        $("#imagen_modulo_imt").attr("src",pimagen);
			                                                        $("#id_link_imagen_imt").val(plink_imagen);
			                                                        $("#id_alt_imagen_imt").val(palt_imagen);
			                                                        $("input[name=id_alinear_imt][value='"+palinear_imagen+"']").attr("checked",true);
			                                                        $("#width_img_imt").val(pwidth);
			                                                        $("#id_width_imt").val(ptanto);
			                                                        $("#id_id_imt").val(pid);
			                                                        $("input[name=id_posicion_imt][value='"+pposi+"']").attr("checked",true);
		
                			                                        $('#id_quien_imagen_texto').val(valor);
                                        				        $('#id_linea_imagen_texto').val(linea);
			                                                        $('#id_donde').val("imagen_modulo_imt");
                        			                                deshabilitar();
                                                			}
									else
									{
										if(tipo=="img_gif")
					                                        {
					                                                $('.nav-tabs #tab_config').css('display', 'none');
                                        					        $('.nav-tabs #tab_modulos_img_gif').tab('show');
					                                                pimagen=$(valors).find('img').attr("src"); console.log("img "+pimagen);
                                        					        plink_imagen=$(valors).find('img').data('link_imagen');
					                                                palt_imagen=$(valors).find('img').attr("alt");
                                        					        palinear_imagen=$(valors).find('img').data("alinear_imagen"); console.log('alinear '+palinear_imagen);
					                                                pwidth=$(valors).find('img').data("width");
                                        					        pid=$(valors).find('img').data("ids");
					                                                ptanto=$(valors).find('img').data("tanto");
                                        					        $("#img_gif_modulo").attr("src",pimagen);
					                                                $("#id_link_img_gif").val(plink_imagen);
                                        					        $("#id_alt_img_gif").val(palt_imagen);
					                                                $("input[name=id_alinear_img_gif][value='"+palinear_imagen+"']").attr("checked",true);
                                        					        $("#width_img_gif").val(pwidth);
					                                                $("#id_width_img_gif").val(ptanto);
                                        					        $("#id_id_gif").val(pid);
					                                                $('#id_quien_img_gif').val(valor);
                                        					        $('#id_linea_img_gif').val(linea);
					                                                $('#id_donde').val("img_gif_modulo");
                                        					        deshabilitar();
					                                        }
										else
										{
											if(tipo=="mod_adj")
								                         {
								                                $('.nav-tabs #tab_config').css('display', 'none');
								                                $('.nav-tabs #tab_modulos_mod_adj').tab('show');
									                        pcolor_texto1=$(valors).find('button').css("color");
								                                pcolor_texto=dev_color(pcolor_texto1);
								                                pcolor_boton1=$(valors).find('button').css("background-color");
								                                pcolor_boton=dev_color(pcolor_boton1);
								                                ptexto_boton=$(valors).find('button').html();
								                                purl_boton = $(valors).find('button').attr('data-link_boton_adj');
								                                pnombre_url = $(valors).find('button').attr('data-nombre_url_adj');
									                        console.log('doc_adj '+pcolor_texto+' '+pcolor_boton+' '+ptexto_boton);
								                                console.log('bot url '+purl_boton);
								                                $("#id_texto_boton_adj").val(ptexto_boton);
								                                $("#id_url_boton_adj").val(pnombre_url);
								                                $("#id_url_nover").val(purl_boton);
								                                $("#id_color_boton_adj").val(pcolor_boton);
								                                $("#id_color_texto_adj").val(pcolor_texto);
								                                $('#id_quien_mod_adj').val(valor);
								                                $('#id_linea_mod_adj').val(linea);
								                                deshabilitar();
								                        }
										}
									}
								}
							}
						}
					}
				}
			}
	       }
	}


	$("#id_imagen").on("click", function(event){

		$('#myModalImagen .alert-danger').html('');
		$('#myModalImagen .alert-success').html('');
		$('#myModalImagen .alert-success').css("display", "none");
	        $('#myModalImagen .alert-danger').css("display", "none");

	        $('#myModalImagen .dz-message').css("display","block");

		$("#myModalImagen").modal("show");
	});

	$("#id_imagen_imt").on("click", function(event){

                $('#myModalImagen .alert-danger').html('');
                $('#myModalImagen .alert-success').html('');
                $('#myModalImagen .alert-success').css("display", "none");
                $('#myModalImagen .alert-danger').css("display", "none");

                $('#myModalImagen .dz-message').css("display","block");

                $("#myModalImagen").modal("show");
        });

	$("#id_img_gif").on("click", function(event){

		$('#myModalImg_gif .alert-danger').html('');
		$('#myModalImg_gif .alert-success').html('');
		$('#myModalImg_gif .alert-success').css("display", "none");
	        $('#myModalImg_gif .alert-danger').css("display", "none");

	        $('#myModalImg_gif .dz-message').css("display","block");

		$("#myModalImg_gif").modal("show");
	});

	$("#id_mod_adj").on("click", function(event){

		$('#myModalDoc .alert-danger').html('');
		$('#myModalDoc .alert-success').html('');
		$('#myModalDoc .alert-success').css("display", "none");
	        $('#myModalDoc .alert-danger').css("display", "none");

	        $('#myModalDoc .dz-message').css("display","block");

		$("#myModalDoc").modal("show");
	});

	function seleccionar(id,wi) {  //pones una imagen nueva 
		console.log('SELECCIONAR '+id+wi);
		//wi ->tamaño real de la imagen
                $("#myModalImagen").modal("hide");
		pvalor=$("#id_donde").val();
                //$("#imagen_modulo").attr("src", id);
                $('#'+pvalor).attr("src", id); 
                //wid=wi*50/100; //por defecto ponemos tamaño al 50%
                wid=wi*100/100; //por defecto ponemos tamaño al 50%
		if(pvalor=="imagen_modulo")
		{
			if(wid>600) wid=600; 
			//wi=wid*100/50;
	                $("#width_img").val(wi); //no cambiar tamaño real
        	        valor=$("#id_id").val();
		}
		else
		{
			if(pvalor=="imagen_modulo_imt")
			{
				if(wid>300) wid=300; 
				//wi=wid*100/50;
		                $("#width_img_imt").val(wi); //no cambiar tamaño real
        		        valor=$("#id_id_imt").val();
			}
		}
		console.log('QUE VALOR '+valor+' -- '+pvalor);
		$('#'+pvalor).find('img').attr('src',id); //en el módulo
		$('#'+valor).find('img').attr('src',id); //en el diseño
		$('#'+valor).find('img').attr('width',wid); //en el diseño
		$('#'+valor).find('img').attr('data-tanto',100); //en el diseño
		$('#'+valor).find('img').attr('data-width',wi); //en el diseño
		$('#'+valor).find('p:eq(1)').html(''); //quitamos la frase arrastra y ...
        }

	function seleccionar_gif(id,wi) {  //pones una imagen nueva 
		console.log('SELECCIONAR '+id+wi);
		//wi ->tamaño real de la imagen
                $("#myModalImg_gif").modal("hide");
		pvalor=$("#id_donde").val();
                //$("#imagen_modulo").attr("src", id);
                $('#'+pvalor).attr("src", id); 
                //wid=wi*50/100; //por defecto ponemos tamaño al 50%
                wid=wi*100/100; //por defecto ponemos tamaño al 50%
		if(wid>600) wid=600; 
       	        $("#width_img_gif").val(wi); //no cambiar tamaño real
        	valor=$("#id_id_gif").val();
		console.log('QUE VALOR '+valor+' -- '+pvalor);
		$('#'+pvalor).find('img').attr('src',id); //en el módulo
		$('#'+valor).find('img').attr('src',id); //en el diseño
		$('#'+valor).find('img').attr('width',wid); //en el diseño
		$('#'+valor).find('img').attr('data-tanto',100); //en el diseño
		$('#'+valor).find('img').attr('data-width',wi); //en el diseño
		$('#'+valor).find('p:eq(1)').html(''); //quitamos la frase arrastra y ...
        }

	function seleccionar_doc(id,wi) {  //pones un documento nuevo
                console.log('SELECCIONAR DOC'+id);
                $("#myModalDoc").modal("hide");
                pvalor=$("#id_donde").val();
                $("#id_url_boton_adj").val(id); //no cambiar tamaño real
                $("#id_url_nover").val(wi); //no cambiar tamaño real
        }

	$("#id_mensaje").bind('input propertychange', function () {
                 valor=$("#id_id").val();
		 valor_id="#"+valor_id;
                 console.log('Resp: *'+response+' - '+valor_id+'*\n');
                 var pmensaje = tinymce.get("id_mensaje").getContent(); console.log('Mensaje '+pmensaje);
                 $(valor_id).html(pmensaje);
	});

	function poner_dividir() {  //linea dividir
		//$cuerpo .= "<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td><hr style='opacity:1;background-color:".$id_color_linea.";height:".$id_line_height."px;margin-top:".$id_padding_top."px;margin-bottom:".$id_padding_bottom."px; '></td></tr></table>";
                 valor=$("#id_quien_dividir").val();
		 pcolor=$('#id_color_linea').val(); //en el módulo
		 ptop=$('#id_padding_top').val()+"px"; //en el módulo
		 pbottom=$('#id_padding_bottom').val()+"px"; //en el módulo
		 plin=$('#id_linea_height_linea').val(); //en el módulo
                 console.log('Resp: DIV:'+valor+' color '+pcolor+' '+ptop+' '+pbottom+'\n');
                 $('#'+valor).find('hr').css("background-color",pcolor);
                 $('#'+valor).find('hr').css("margin-top",ptop);
                 $('#'+valor).find('hr').css("margin-bottom",pbottom);
                 $('#'+valor).find('hr').css("height",plin);
	}

	function poner_boton() {  
                 valor=$("#id_quien_boton").val();
		 ptexto=$('#id_texto_boton').val(); //en el módulo
		 purl=$('#id_url_boton').val(); //en el módulo
		 pcolor=$('#id_color_texto').val(); //en el módulo
		 pboton=$('#id_color_boton').val(); //en el módulo
                 console.log('Resp: BOT:'+valor+' color '+pcolor+'\n');
                 $('#'+valor).find('button').css("background-color",pboton);
                 $('#'+valor).find('button').css("color",pcolor);
		 $('#'+valor).find('button').css("border", "1px solid "+pboton);
                 $('#'+valor).find('button').attr("data-link_boton",purl);
                 $('#'+valor).find('button').html(ptexto);
	}

	function poner_texto() {  //texto en directo
                 pdonde=$("#id_donde").val();
		 if(pdonde=="texto")
		 {
                 	valor=$("#id_quien_texto").val();
	                var pmensaje = tinymce.get("id_mensaje").getContent(); //console.log(pmensaje);
			contar=pmensaje.length;
			console.log('Contar: '+contar);
        	        $('#'+valor).find('span').html(pmensaje);
		 }
		else
		{
			if(pdonde=="imagen_modulo_imt")
			{
                 		valor=$("#id_quien_imagen_texto").val();
		                var pmensaje = tinymce.get("id_mensaje_imt").getContent(); //console.log(pmensaje);
        		        $('#'+valor).find('span').html(pmensaje);
			}
		}
        }

        function poner_imagen() {  //imagen en directo 
                valor=$("#id_quien_imagen").val();
                size=$("#width_img").val();
                wi=$("#id_width").val();
                pimagen=$("#imagen_modulo").attr("src");
                wid=size*wi/100;
		if(wid>600)
                {
                        //wid=600; 
			wid=600*wi/100;
                }
                palinear_imagen=$('input:radio[name=id_alinear]:checked').val(); 
                palt_imagen=$('#imagen_modulo').attr("alt");
                plink_imagen=$('#imagen_modulo').data('link_imagen');
		if(palinear_imagen=="center") pestilo="style='text-align:center;margin-bottom:0px;'";
		else pestilo="style='float:"+palinear_imagen+";margin-bottom:0px;'";
                pimg="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' width='"+wid+"' data-width='"+size+"' data-ids='"+valor+"' data-tanto='"+wi+"' data-id='"+valor+"' id='"+valor+"'></p></td></tr></table>";
                valor="#"+valor;
                $(valor).html(pimg);
                console.log(pid+' '+pimagen);
        }

        function poner_img_gif() {  //imagen en directo 
                valor=$("#id_quien_img_gif").val();
                size=$("#width_img_gif").val();
                wi=$("#id_width_img_gif").val();
                pimagen=$("#img_gif_modulo").attr("src");
                wid=size*wi/100;
		if(wid>600)
                {
                        //wid=600; 
			wid=600*wi/100;
                }
                palinear_imagen=$('input:radio[name=id_alinear_img_gif]:checked').val(); 
                palt_imagen=$('#img_gif_modulo').attr("alt");
                plink_imagen=$('#img_gif_modulo').data('link_imagen');
		if(palinear_imagen=="center") pestilo="style='text-align:center;margin-bottom:0px;'";
		else pestilo="style='float:"+palinear_imagen+";margin-bottom:0px;'";
                pimg="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' width='"+wid+"' data-width='"+size+"' data-ids='"+valor+"' data-tanto='"+wi+"' data-id='"+valor+"' id='"+valor+"'></p></td></tr></table>";
                valor="#"+valor;
                $(valor).html(pimg);
                console.log(pid+' '+pimagen);
        }

	function poner_espacio() {  //linea dividir
                 valor=$("#id_quien_espacio").val();
                 plin=$('#id_line_height').val(); //en el módulo
                 console.log('Resp: DIV:'+valor+' color '+plin+'\n');
                 $('#'+valor).find('p').css("height",plin);
        }

	function poner_imagen_imt(tipo) {  //imagen en directo 
                valor=$("#id_id_imt").val();
                size=$("#width_img_imt").val();
                wi=$("#id_width_imt").val();
                pimagen=$("#imagen_modulo_imt").attr("src");
                wid=size*wi/100;
		if(wid>300)
                {
                        //wid=300; 
			wid=300*wi/100;
                }
                palinear_imagen=$('input:radio[name=id_alinear_imt]:checked').val();
                palt_imagen=$('#imagen_modulo_imt').attr("alt");
                plink_imagen=$('#imagen_modulo_imt').data('link_imagen');
                var ptexto = tinymce.get("id_mensaje_imt").getContent(); console.log('Mensaje '+ptexto);
		if(tipo==0) tipo=$('input:radio[name=id_posicion_imt]:checked').val();
		console.log('tipo '+tipo+' alinear '+palinear_imagen);
		if(palinear_imagen=="center") pestilo="style='text-align:center'";
		else pestilo="style='float:"+palinear_imagen+"'";
		if(tipo==1)
		{ //left
			poner="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+valor+"' data-tanto='"+wi+"' data-posicion='"+tipo+"' data-id='"+valor+"' id='"+valor+"'></p></td><td width='50%'><span>"+ptexto+"</span></td></tr></table>";
		}
		else 
		{
			if(tipo==2)
			{//right
				poner="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td width='50%'><span>"+ptexto+"</span></td><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+valor+"' data-tanto='"+wi+"' data-posicion='"+tipo+"' data-id='"+valor+"' id='"+valor+"'></p></td></tr></table>";
			}
			else
			{
				if(tipo==3)
				{//top
					poner="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+valor+"' data-tanto='"+wi+"' data-posicion='"+tipo+"' data-id='"+valor+"' id='"+valor+"'></p></td></tr><tr><td width='50%'><span>"+ptexto+"</span></td></tr></table>";
				}
				else
				{
					if(tipo==4)
					{//right
						poner="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td width='50%'><span>"+ptexto+"</span></td></tr><tr><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+valor+"' data-tanto='"+wi+"' data-posicion='"+tipo+"' data-id='"+valor+"' id='"+valor+"'></p></td></tr></table>";
					}
				}
			}
		}
                console.log(poner);
                valor="#"+valor;
                $(valor).html(poner);
        }

	function poner_mod_adj() {
                 valor=$("#id_quien_mod_adj").val();
                 ptexto=$('#id_texto_mod_adj').val(); //en el módulo
                 purl=$('#id_url_boton_adj').val(); //en el módulo
                 purln=$('#id_url_nover').val(); //en el módulo
                 pcolor=$('#id_color_texto_adj').val(); //en el módulo
                 pboton=$('#id_color_boton_adj').val(); //en el módulo
                 console.log('Resp: BOT:'+valor+' color '+pcolor+'\n');
                 $('#'+valor).find('button').css("background-color",pboton);
                 $('#'+valor).find('button').css("color",pcolor);
                 $('#'+valor).find('button').css("border", "1px solid "+pboton);
                 $('#'+valor).find('button').attr("data-link_boton_adj",purl);
                 $('#'+valor).find('button').html(ptexto);
        }

        function dev_color(rgb) {   
          // Choose correct separator
          let sep = rgb.indexOf(",") > -1 ? "," : " ";
          // Turn "rgb(r,g,b)" into [r,g,b]
          rgb = rgb.substr(4).split(")")[0].split(sep);

          let r = (+rgb[0]).toString(16),
              g = (+rgb[1]).toString(16),
              b = (+rgb[2]).toString(16);
        
          if (r.length == 1)
            r = "0" + r;
          if (g.length == 1)
            g = "0" + g;
          if (b.length == 1)
            b = "0" + b;

          return "#" + r + g + b;
        };


	//Botones Cancelar
/*
	 $("#cancelar_tex").on("click", function(event){
                quien=$("#id_quien_texto").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_texto").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	 $("#cancelar_img").on("click", function(event){
                quien=$("#id_quien_imagen").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_imagen").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	 $("#cancelar_div").on("click", function(event){
                quien=$("#id_quien_dividir").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_dividir").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	 $("#cancelar_esp").on("click", function(event){
                quien=$("#id_quien_espacio").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_espacio").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	 $("#cancelar_bot").on("click", function(event){
                quien=$("#id_quien_boton").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_boton").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	$("#cancelar_red").on("click", function(event){
                quien=$("#id_quien_redes_sociales").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_redes_sociales").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	 $("#cancelar_imt").on("click", function(event){
                quien=$("#id_quien_imagen_texto").val(); 
                tipo=$("#id_tipo").val(); 
                $(".nav-tabs #tab_modulos_imagen_texto").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
	$("#cancelar_we").on("click", function(event){
                quien=$("#id_quien_web_email").val();
                tipo=$("#id_tipo").val();
                $(".nav-tabs #tab_modulos_web_email").removeClass("active");
                //$(".nav-tabs #tab_diseno").addClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                $('#'+quien).css('border', '0');
                $('.nav-tabs #tab_config').css('display', 'block');
                console.log('He clickado '+quien);
        });
*/

	//Botones Borrar
	$("#borrar_tex").on("click", function(event){
                $(".nav-tabs #tab_modulos_texto").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_texto").val(); 
		valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
				        //borrar div
				        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                		                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                		        $("#enviar_test").attr('disabled','true');
		                                        $("#enviar_ahora").attr('disabled','true');
                		                        $("#programar").attr('disabled','true');
                		                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								if(valores!="")
			                                        {
        	        		                                $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                	                		                $("#enviar_test").removeAttr('disabled');
		        	                                        $("#enviar_ahora").removeAttr('disabled');
                			                                $("#programar").removeAttr('disabled');
                			                                $("#guardar").removeAttr('disabled');
                                			        }
                                                        }
                                                }
                                        }
				       else
				       {
					        cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
				       }
                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	 $("#borrar_img").on("click", function(event){
                $(".nav-tabs #tab_modulos_imagen").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_imagen").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
				        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								 if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }
				        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });


	 $("#borrar_img_gif").on("click", function(event){
                $(".nav-tabs #tab_modulos_img_gif").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_img_gif").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien_img_gif'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
				        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								 if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }
				        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	//$(".button-container").on("click",'.borrar_gen', function(event){
	//$("#dropfinal3").on("click",'.mov_modulos .button-container .borrar_gen', function(event){
	//$(".borrar_gen").on("click", function(event){
	function borrar_general()
	{
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
		quien=$(this).attr('id'); 
                valor='#'+quien; console.log(valor);
                pid=$(valor).attr('data-quien'); 
		console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
                orden=$('#dropfinal3').attr("data-quien");
                valores=orden.replace(busca,"");
                //valores=valores.replace("||","");
                $('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //existe un a1_1 ???
				        if($("#a"+quien).length) 
				        {
						//en lugar de borrar cambiar valores data-id y id
						//coger primer valor data-quien
						//diferenciar si hay varios o queda uno
						cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
						console.log('Borrar Quien '+valores+' cuan '+cuan);
						if(cuan==0) 
						{//està vacio
							$('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
						}
						else
						{
							qui=valores.split("|"); console.log('cuan '+cuan);
							i=0; while(qui[i]=="") { i++; }
							if(qui[i]!="")
							{ 
								vqui=qui[i]; console.log('vqui '+vqui);
	                					quin=vqui.replaceAll("*",""); console.log('quin '+quin);
								//borramos antiguo y creamos nuevo
								//zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
								const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
				        			$('#a'+quien).remove(); //borrar d movido
								if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
							}
						}
					}
				       else
				       { //creo que esta vacio
					       cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                               console.log('Borrar Quien '+valores+' cuan '+cuan);
                                               if(cuan==0)
                                               {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                               }
				       }
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
	}
	//});

	$("#borrar_div").on("click", function(event){
                $(".nav-tabs #tab_modulos_texto").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_dividir").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								 if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }
                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	 $("#borrar_esp").on("click", function(event){
                $(".nav-tabs #tab_modulos_espacio").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_espacio").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								 if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }

                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	 $("#borrar_bot").on("click", function(event){
                $(".nav-tabs #tab_modulos_boton").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_boton").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }

                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#borrar_red").on("click", function(event){
                $(".nav-tabs #tab_modulos_redes_sociales").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_redes_sociales").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }

                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#borrar_imt").on("click", function(event){
                $(".nav-tabs #tab_modulos_imagen_texto").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_imagen_texto").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }
                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#borrar_we").on("click", function(event){
                $(".nav-tabs #tab_modulos_web_email").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_web_email").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }

                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });
	
	 $("#borrar_mod_adj").on("click", function(event){
                $(".nav-tabs #tab_modulos_boton").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                quien=$("#id_quien_mod_adj").val();
                valor="#"+quien;
                pid=$(valor).attr('data-quien'); console.log('pid '+pid);
                busca="*"+$(valor).attr('data-id')+"*"; console.log('busca '+busca);
		orden=$('#dropfinal3').attr("data-quien");
	        valores=orden.replace(busca,"");
		$('#dropfinal3').attr("data-quien",valores);

                $.ajax({
                        type: 'post',
                         url: 'borrar_modulos.php',
                               data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id:pid,porden:valores},
                               success: function(response){
                                        diseno=response;
                                        //borrar div
                                        $(valor).remove();
				        $('#d'+quien).remove(); //borrar d movido
				        //borrar a si existe
                                        //existe un a1_1 ???
                                        if($("#a"+quien).length)
                                        {
                                                //en lugar de borrar cambiar valores data-id y id
                                                //coger primer valor data-quien
                                                //diferenciar si hay varios o queda uno
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                                else
                                                {
                                                        qui=valores.split("|"); console.log('cuan '+cuan);
                                                        i=0; while(qui[i]=="") { i++; }
                                                        if(qui[i]!="")
                                                        {
                                                                vqui=qui[i]; console.log('vqui '+vqui);
                                                                quin=vqui.replaceAll("*",""); console.log('quin '+quin);
                                                                //borramos antiguo y creamos nuevo
                                                                //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+quin);
                                                                nodeCopya.setAttribute("id","a"+quin);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                const h2 = document.getElementById("a"+quien);
                                                                h2.insertAdjacentElement("beforebegin", nodeCopya); //antes del actual
                                                                //zona droppable antes
                                                                $('#a'+quien).remove(); //borrar d movido
								if(valores!="")
                                                                {
                                                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                                        $("#enviar_test").removeAttr('disabled');
                                                                        $("#enviar_ahora").removeAttr('disabled');
                                                                        $("#programar").removeAttr('disabled');
                                                                        $("#guardar").removeAttr('disabled');
                                                                }
                                                        }
                                                }
                                        }
				        else
                                       {
                                                cuan = valores.split("*").length-1; console.log('cuan '+cuan+' valores '+valores);
                                                console.log('Borrar Quien '+valores+' cuan '+cuan);
                                                if(cuan==0)
                                                {//està vacio
                                                        $('#dropfinal3').html('');
                                                        $('#imodulos').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                                                        $("#enviar_test").attr('disabled','true');
                                                        $("#enviar_ahora").attr('disabled','true');
                                                        $("#programar").attr('disabled','true');
                                                        $("#guardar").attr('disabled','true');
                                                }
                                       }

                                        //borrar a si existe
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	//Botones Guardar

	//Boton Guardar Configuracion General
	$("#guardar_config").on("click", function(event){
                $(".nav-tabs #config").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val(); 
                valor_id=0;
		valor_line=0;
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                               data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,line:valor_line,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){
                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        //console.log('Resp: *'+response+'*\n');
				       $("#dropfinal3").css("background-color", pbackground);
				       $("#dropfinal3").css("color", pcolor_letra);
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
	       habilitar();
        });


	//Boton Guardar Módulos de Texto
	$("#guardar_tex").on("click", function(event){
                $(".nav-tabs #tab_modulos_texto").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pprofile=pprofile;
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_texto").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                //myContent = tinymce. activeEditor. getContent();
                var pmensaje = "<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td><span>"+tinymce.get("id_mensaje").getContent()+"</span></td></tr></table>"; console.log('Mensaje '+pmensaje);
                var pmensaje_pan = tinymce.get("id_mensaje").getContent(); console.log('Mensaje '+pmensaje);
                //pmensaje=$("#id_mensaje").val(); console.log('Mensaje '+pmensaje);
                tipo="texto";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado TEX'+diseno+' '+valor_id+' '+tipo+' '+valor_line);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                               data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_mensaje:pmensaje,id_tipo:tipo,line:valor_line,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){
                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        valor_id="#"+valor_id;
                                        console.log('Resp: *'+response+' - '+valor_id+'*\n');
                                        //$(valor_id).html(pmensaje);
                                        $(valor_id).find('span').html(pmensaje_pan);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

         $("#guardar_img").on("click", function(event){
                $(".nav-tabs #tab_modulos_imagen").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_imagen").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                tipo="imagen";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");

                pimagen=$("#imagen_modulo").attr("src");
                plink_imagen=$("#id_link_imagen").val();
                palt_imagen=$("#id_alt_imagen").val();
                palinear_imagen=$('input:radio[name=id_alinear]:checked').val(); 
                pid_width=$("#id_width").val();
                //size=$("#imagen_modulo").height();
                size=$("#width_img").val();
		wid=size*pid_width/100;
                if(wid>600)
                {
                        //wid=600; 
			wid=600*pid_width/100;
                }


                console.log('He clickado IMG'+diseno+' '+valor_id+' '+tipo+' '+valor_line+' '+pimagen+' '+plink_imagen+' '+palt_imagen+' '+palinear_imagen+' '+size);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                               data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_tipo:tipo,line:valor_line,id_imagen:pimagen,id_link_imagen:plink_imagen,id_alt_imagen:palt_imagen,id_alinear_imagen:palinear_imagen,id_width:size,id_tanto_width:pid_width,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){

                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        ids=valor_id;
                                        valor_id="#"+valor_id;
                                        console.log('Resp IMG: *'+response+' - '+valor_id+' imagen '+pimagen+' \n');
                                        //wid=size*pid_width/100;
				        suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
                                        pimg=suma+"<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td>"+"<p style='padding:5px;text-align:"+palinear_imagen+";margin-bottom:0px;'><img src='"+pimagen+"' alt='"+palt_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-link_imagen='"+plink_imagen+"' width='"+wid+"' data-width='"+size+"' data-ids='"+ids+"' data-tanto='"+pid_width+"' data-id='"+ids+"' id='"+ids+"'></div>"+"</td></tr></table>";
                                        $(valor_id).html(pimg);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
					$("input:radio[name=id_alinear]").removeAttr('checked');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#guardar_div").on("click", function(event){
                $(".nav-tabs #tab_modulos_espacio").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_dividir").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                pcolor_linea=$("#id_color_linea").val(); console.log('color '+pcolor_linea);
                ppadding_top=$("#id_padding_top").val();
                ppadding_bottom=$("#id_padding_bottom").val();
                plinea_height=$("#id_linea_height_linea").val();
                tipo="dividir";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado DIVIDIR: '+diseno+' '+valor_id+' *'+tipo+'* '+valor_line);

                $.ajax({
                        type: 'post',
                        url: 'guardar_modulos.php',
                        data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_color_linea:pcolor_linea,id_tipo:tipo,line:valor_line,id_padding_top:ppadding_top,id_padding_bottom:ppadding_bottom,id_linea_height:plinea_height,porden:orden,id_campana:pcampana,id_html:phtml},
                        success: function(response){
                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        valor_id="#"+valor_id;
                                        console.log('Resp: *'+response+' - '+valor_id+'*\n');
                                        ppadding_top=ppadding_top+"px";
                                        ppadding_bottom=ppadding_bottom+"px";
                                        $(valor_id).find('hr').css("margin-top", ppadding_top);
                                        $(valor_id).find('hr').css("margin-bottom", ppadding_bottom);
                                        $(valor_id).find('hr').css("background-color", pcolor_linea);
                                        $(valor_id).find('hr').css("height", plinea_height);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
                        },
                        error: function() {
                                       console.log('Error en ajax intercambio');
                        }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	 $("#guardar_esp").on("click", function(event){
                $(".nav-tabs #tab_modulos_espacio").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_espacio").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val(); 
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                pline_height=$("#id_line_height").val();
                tipo="espacio";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado ESP'+diseno+' '+valor_id+' '+tipo+' '+valor_line+'||'+quien);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                               data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_line_height:pline_height,id_tipo:tipo,line:valor_line,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){

                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        valor_id="#"+valor_id;
                                        console.log('Resp: *'+response+' - '+valor_id+'*\n');
                                        pline_height=pline_height+"px";
                                        $(valor_id).find('p').css("height", pline_height);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#guardar_bot").on("click", function(event){
                $(".nav-tabs #tab_modulos_boton").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_boton").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                ptexto_boton=$("#id_texto_boton").val();
                purl_boton=$("#id_url_boton").val();
                ppadding_top=0;
                ppadding_bottom=0;
                pcolor_boton=$("#id_color_boton").val();
                pcolor_texto=$("#id_color_texto").val();
                tipo="boton";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado BOT '+diseno+' '+valor_id+' '+tipo+' '+valor_line+' '+pcolor_boton+' '+ppadding_top);
                console.log('He clickado BOT URL '+purl_boton);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                         data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_texto_boton:ptexto_boton,id_tipo:tipo,line:valor_line,id_url_boton:purl_boton,id_padding_top:ppadding_top,id_padding_bottom:ppadding_bottom,id_color_boton:pcolor_boton,id_color_texto:pcolor_texto,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){

                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        console.log('Resp: *'+response+' - '+valor_id+'*\n');
                                        valor_id="#"+valor_id;
                                        $(valor_id).find('button').css("color", pcolor_texto);
                                        $(valor_id).find('button').css("background-color", pcolor_boton);
                                        $(valor_id).find('button').css("border", "1px solid "+pcolor_boton);
                                        $(valor_id).find('button').html(ptexto_boton);
                                        $(valor_id).find('button').attr('data-link_boton',purl_boton);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	 //Boton Guardar Módulos de Texto
        $("#guardar_we").on("click", function(event){
                $(".nav-tabs #tab_modulos_web_email").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pprofile=pprofile;
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_web_email").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

		pweb=$("#id_url_web").val();
		pemail=$("#id_url_email").val();
                tipo="web_email";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado TEX'+diseno+' '+valor_id+' '+tipo+' '+valor_line);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                         data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_tipo:tipo,line:valor_line,id_url_web:pweb,id_url_email:pemail,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){
                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        valor_id="#"+valor_id;
                                        console.log('Resp: *'+response+' - '+valor_id+'*\n');
				        suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
                                        pimg=suma+"<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td><div style='padding:5px;text-align:center'><img src='../img/icono_web.png' alt='Web' data-web='"+pweb+"' width='32' height='32'></div></td><td><div style='padding:5px;text-align:center'><img src='../img/icono_email.png' alt='Email' data-email='"+pemail+"' width='32' height='32'></div></td></tr></table>";
                                        $(valor_id).html(pimg);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

         $("#guardar_imt").on("click", function(event){
                $(".nav-tabs #tab_modulos_imagen_imt").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_imagen_texto").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                tipo="imagen_texto";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");

                var ptexto = tinymce.get("id_mensaje_imt").getContent(); console.log('Mensaje '+ptexto);
                pimagen=$("#imagen_modulo_imt").attr("src");
                plink_imagen=$("#id_link_imagen_imt").val();
                palt_imagen=$("#id_alt_imagen_imt").val();
                palinear_imagen=$('input:radio[name=id_alinear_imt]:checked').val(); 
                pid_width=$("#id_width_imt").val();
		wi=pid_width;
                size=$("#width_img_imt").val();
		wid=size*wi/100;
                if(wid>300)
                {
                        //wid=300; 
			wid=300*wi/100;
                }

		tpos=$('input:radio[name=id_posicion_imt]:checked').val(); console.log('tpos '+tpos);

                console.log('He clickado IMG'+diseno+' '+valor_id+' '+tipo+' '+valor_line+' '+pimagen+' '+plink_imagen+' '+palt_imagen+' '+palinear_imagen+' '+size);

                $.ajax({
                        type: 'post',
                        url: 'guardar_modulos.php',
                        data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_tipo:tipo,line:valor_line,id_imagen:pimagen,id_link_imagen:plink_imagen,id_alt_imagen:palt_imagen,id_alinear_imagen:palinear_imagen,id_width:size,id_tanto_width:pid_width,id_mensaje:ptexto,id_posicion:tpos,porden:orden,id_campana:pcampana,id_html:phtml},
                        success: function(response){
                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        ids=valor_id;
                                        valor_id="#"+valor_id;
                                        console.log('Resp IMG: *'+response+' - '+valor_id+' imagen '+pimagen+' \n');
					/*
                                        pimg="<table border='0' cellspacing='0' cellpadding='0' width='100%'><tr><td>"+"<div style='padding:5px;text-align:"+palinear_imagen+"'><img src='"+pimagen+"' alt='"+palt_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-link_imagen='"+plink_imagen+"' width='"+wid+"' data-width='"+size+"' data-ids='"+ids+"' data-tanto='"+pid_width+"'></div>"+"</td></tr></table>";
                                        $(valor_id).html(pimg);
                                        $(valor_id).find('span').html(pmensaje_pan);
					*/
					if(palinear_imagen=="center") pestilo="style='text-align:center'";
					else pestilo="style='float:"+palinear_imagen+"'";
					if(tpos==1)
			                { //left
                        			poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' style='max-width:600px' onclick='editar_general()'><tr><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+ids+"' data-tanto='"+pid_width+"' data-posicion='"+tipo+"' data-id='"+ids+"' id='"+ids+"'></p></td><td width='50%'><span>"+ptexto+"</span></td></tr></table>";
			                }
			                else
			                {
			                        if(tpos==2)
			                        {//right
                        			        poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' style='max-width:600px' onclick='editar_general()'><tr><td width='50%'><span>"+ptexto+"</span></td><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+ids+"' data-tanto='"+pid_width+"' data-posicion='"+tipo+"' data-id='"+ids+"' id='"+ids+"'></p></td></tr></table>";
			                        }
                        			else
			                        {
                        			        if(tpos==3)
			                                {//top
                        			                poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' style='max-width:600px' onclick='editar_general()'><tr><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+ids+"' data-tanto='"+pid_width+"' data-posicion='"+tipo+"' data-id='"+ids+"' id='"+ids+"'></p></td></tr><tr><td width='50%'><span>"+ptexto+"</span></td></tr></table>";
			                                }
                        			        else
			                                {
                        			                if(tpos==4)
			                                        {//right
                        			                        poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' style='max-width:600px' onclick='editar_general()'><tr><td width='50%'><span>"+ptexto+"</span></td></tr><tr><td width='50%'><p "+pestilo+"><img src='"+pimagen+"' alt='"+palt_imagen+"' style='display:block; margin:0px auto;' data-link_imagen='"+plink_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-width='"+size+"' width='"+wid+"' data-ids='"+ids+"' data-tanto='"+pid_width+"' data-posicion='"+tipo+"' data-id='"+ids+"' id='"+ids+"'></p></td></tr></table>";
			                                        }
                        			        }
			                        }
			                }
				        suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
					poner=suma+poner;
                                        $(valor_id).html(poner);

                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
					$("input:radio[name=id_alinear]").removeAttr('checked');
                       },
                       error: function() {
                                console.log('Error en ajax intercambio');
                       }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#guardar_red").on("click", function(event){
                $(".nav-tabs #tab_modulos_redes_sociales").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_redes_sociales").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

		contar=0;
                pid_facebook=$("#id_facebook").val(); 
		if(pid_facebook!="") {

			id_facebook="<td><div style='padding:5px;text-align:center'><img src='../img/icono_facebook.png' width='32' height='32' data-facebook='"+pid_facebook+"'></div></td>";
			contar++;
		} else id_facebook="";
                pid_twitter=$("#id_twitter").val();
		if(pid_twitter!="") 
		{ 
			id_twitter="<td><div style='padding:5px;text-align:center'><img src='../img/icono_twitter.png' width='32' height='32' data-twitter='"+pid_twitter+"'></div></td>"; 
			contar++;
		} 
		else id_twitter="";
                pid_instagram=$("#id_instagram").val();
		if(pid_instagram!="") { 
			id_instagram="<td><div style='padding:5px;text-align:center'><img src='../img/icono_instagram.png' width='32' height='32' data-instagram='"+pid_instagram+"'></div></td>"; 
			contar++;
		} else id_instagram="";
                pid_linkedin=$("#id_linkedin").val();
		if(pid_linkedin!="") { 
			id_linkedin="<td><div style='padding:5px;text-align:center'><img src='../img/icono_linkedin.png' width='32' height='32' data-linkedin='"+pid_linkedin+"'></div></td>"; 
			contar++;
		} else id_linkedin="";
                pid_youtube=$("#id_youtube").val();
		if(pid_youtube!="") { 
			id_youtube="<td><div style='padding:5px;text-align:center'><img src='../img/icono_youtube.png' width='32' height='32' data-youtube='"+pid_youtube+"'></div></td>"; 
			contar++;
		} else id_youtube="";
                pid_pinterest=$("#id_pinterest").val();
		if(pid_pinterest!="") { 
			id_pinterest="<td><div style='padding:5px;text-align:center'><img src='../img/icono_pinterest.png' width='32' height='32' data-pinterest='"+pid_pinterest+"'></div></td>"; 
			contar++;
		} else id_pinterest="";
                pid_bandcamp=$("#id_bandcamp").val();
		if(pid_bandcamp!="") { 
			id_bandcamp="<td><div style='padding:5px;text-align:center'><img src='../img/icono_bandcamp.png' width='32' height='32' data-bandcamp='"+pid_bandcamp+"'></div></td>"; 
			contar++;
		} else id_bandcamp="";
                pid_soundcloud=$("#id_soundcloud").val();
		if(pid_soundcloud!="") { 
			id_soundcloud="<td><div style='padding:5px;text-align:center'><img src='../img/icono_soundcloud.png' width='32' height='32' data-soundcloud='"+pid_soundcloud+"'></div></td>"; 
			contar++;
		} else id_soundcloud="";
                pid_vimeo=$("#id_vimeo").val();
		if(pid_vimeo!="") { 
			id_vimeo="<td><div style='padding:5px;text-align:center'><img src='../img/icono_vimeo.png' width='32' height='32' data-vimeo='"+pid_vimeo+"'></div></td>"; 
			contar++;
		} else id_vimeo="";
                pid_flickr=$("#id_flickr").val();
		if(pid_flickr!="") { 
			id_flickr="<td><div style='padding:5px;text-align:center'><img src='../img/icono_flickr.png' width='32' height='32' data-flickr='"+pid_flickr+"'></div></td>"; 
			contar++;
		} else id_flickr="";
                pid_spotify=$("#id_spotify").val();
		if(pid_spotify!="") { 
			id_spotify="<td><div style='padding:5px;text-align:center'><img src='../img/icono_spotify.png' width='32' height='32' data-spotify='"+pid_spotify+"'></div></td>"; 
			contar++;
		} else id_spotify="";

		if(contar==0)
		{
			id_facebook="<td><div style='padding:5px;text-align:center'><img src='../img/icono_facebook.png' width='32' height='32' data-facebook='"+pid_facebook+"'></div></td>";
		}
		datos_redes="<div id='redes' style='visibility:hidden;' data-spotify='"+pid_spotify+"' data-flickr='"+pid_flickr+"' data-vimeo='"+pid_vimeo+"' data-soundcloud='"+pid_soundcloud+"' data-bandcamp='"+pid_bandcamp+"' data-pinterest='"+pid_pinterest+"' data-youtube='"+pid_youtube+"' data-linkedin='"+pid_linkedin+"' data-instagram='"+pid_instagram+"' data-twitter='"+pid_twitter+"' data-facebook='"+pid_facebook+"'></div>";
                tipo="redes_sociales";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado RED'+diseno+' '+valor_id+' '+tipo+' '+valor_line);

		//$modi=",id_facebook='$id_facebook',id_twitter='$id_twitter',id_instagram='$id_instagram',id_linkedin='$id_linkedin',id_youtube='$id_youtube',id_pinterest='$id_pinterest',id_bandcamp='$id_bandcamp',id_soundcloud='$id_soundcloud',id_vimeo='$id_vimeo',id_flickr='$id_flickr',id_spotify='$id_spotify'";
                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                               data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_tipo:tipo,line:valor_line,id_facebook:pid_facebook,id_twitter:pid_twitter,id_instagram:pid_instagram,id_linkedin:pid_linkedin,id_youtube:pid_youtube,id_pinterest:pid_pinterest,id_bandcamp:pid_bandcamp,id_soundcloud:pid_soundcloud,id_vimeo:pid_vimeo,id_flickr:pid_flickr,id_spotify:pid_spotify,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){

                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        valor_id="#"+valor_id;
					console.log('Resp: *'+response+' - '+valor_id+'*\n');
				        suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
					pmensaje=datos_redes+suma+"<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr>"+id_facebook+id_twitter+id_instagram+id_linkedin+id_youtube+id_pinterest+id_bandcamp+id_soundcloud+id_vimeo+id_flickr+id_spotify+"</tr></table>";
                                        $(valor_id).html(pmensaje);
                                        $(valor_id).css("border", '0');
					$('.nav-tabs #tab_config').css('display', 'block');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

         $("#guardar_img_gif").on("click", function(event){
                $(".nav-tabs #tab_modulos_img_gif").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_img_gif").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                tipo="img_gif";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");

                pimagen=$("#img_gif_modulo").attr("src");
                plink_imagen=$("#id_link_img_gif").val();
                palt_imagen=$("#id_alt_img_gif").val();
                palinear_imagen=$('input:radio[name=id_alinear_img_gif]:checked').val(); 
                pid_width=$("#id_width_img_gif").val();
                //size=$("#imagen_modulo").height();
                size=$("#width_img_gif").val();
		wid=size*pid_width/100;
                if(wid>600)
                {
                        //wid=600; 
			wid=600*pid_width/100;
                }


                console.log('He clickado IMG GIF'+diseno+' '+valor_id+' '+tipo+' '+valor_line+' '+pimagen+' '+plink_imagen+' '+palt_imagen+' '+palinear_imagen+' '+size);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                               data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_tipo:tipo,line:valor_line,id_imagen:pimagen,id_link_imagen:plink_imagen,id_alt_imagen:palt_imagen,id_alinear_imagen:palinear_imagen,id_width:size,id_tanto_width:pid_width,porden:orden,id_campana:pcampana,id_html:phtml},
                               success: function(response){

                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        //$("#id_diseno_linea_").val(diseno[1]);
                                        ids=valor_id;
                                        valor_id="#"+valor_id;
                                        console.log('Resp IMG: *'+response+' - '+valor_id+' imagen '+pimagen+' \n');
                                        //wid=size*pid_width/100;
				        suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
                                        pimg=suma+"<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td>"+"<p style='padding:5px;text-align:"+palinear_imagen+";margin-bottom:0px;'><img src='"+pimagen+"' alt='"+palt_imagen+"' data-alinear_imagen='"+palinear_imagen+"' data-link_imagen='"+plink_imagen+"' width='"+wid+"' data-width='"+size+"' data-ids='"+ids+"' data-tanto='"+pid_width+"' data-id='"+ids+"' id='"+ids+"'></div>"+"</td></tr></table>";
                                        $(valor_id).html(pimg);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
					$("input:radio[name=id_alinear_img_gif]").removeAttr('checked');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	$("#guardar_mod_adj").on("click", function(event){
                $(".nav-tabs #tab_modulos_boton").removeClass("active");
                $('.nav-tabs #tab_diseno').tab('show');
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                quien=$("#id_quien_mod_adj").val();
                pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
		orden=$('#dropfinal3').attr("data-quien");
		pcampana=$('#id_campana').val();

                ptexto_boton=$("#id_texto_boton_adj").val();
                purl_boton=$("#id_url_boton_adj").val();
                purl_nover=$("#id_url_nover").val();
                ppadding_top=0;
                ppadding_bottom=0;
                pcolor_boton=$("#id_color_boton_adj").val();
                pcolor_texto=$("#id_color_texto_adj").val();
                tipo="mod_adj";
                valor_ids="#"+quien;
                valor_line=$(valor_ids).attr("data-quien");
                valor_id=$(valor_ids).attr("data-id");
                console.log('He clickado BOT ADJ '+diseno+' '+valor_id+' '+tipo+' '+valor_line+' '+pcolor_boton+' '+ppadding_top);
                console.log('He clickado BOT URL '+purl_boton);

                $.ajax({
                        type: 'post',
                         url: 'guardar_modulos.php',
                         data:{id_profile:pprofile,id:valor_id,datos:pdatos,id_diseno:pdiseno,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,id_texto_boton:ptexto_boton,id_tipo:tipo,line:valor_line,id_url_boton:purl_boton,id_padding_top:ppadding_top,id_padding_bottom:ppadding_bottom,id_color_boton:pcolor_boton,id_color_texto:pcolor_texto,porden:orden,id_campana:pcampana,id_html:phtml,id_url_nover:purl_nover},
                               success: function(response){

                                        diseno=response.split("|");
                                        $("#id_diseno").val(diseno[0]);
                                        console.log('Resp: *'+response+' - '+valor_id+'*\n');
                                        valor_id="#"+valor_id;
                                        $(valor_id).find('button').css("color", pcolor_texto);
                                        $(valor_id).find('button').css("background-color", pcolor_boton);
                                        $(valor_id).find('button').css("border", "1px solid "+pcolor_boton);
                                        $(valor_id).find('button').html(ptexto_boton);
                                        $(valor_id).find('button').attr('data-link_boton_adj',purl_nover);
                                        $(valor_id).find('button').attr('data-nombre_url_adj',purl_boton);
                                        $(valor_id).css("border", '0');
                                        $('.nav-tabs #tab_config').css('display', 'block');
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
		//Habilitar Botones y DIV
		habilitar();
        });

	//ENVIO
	$("#enviar_ahora").on("click", function(event){
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                pasunto=$("#id_asunto").val();
                pnombre=$("#id_nombre").val();
                ppreheader=$("#id_preheader").val();
                pcampana=$("#id_campana").val();
		orden=$('#dropfinal3').attr("data-quien");
                premitente=$("#id_remitente").val();
		console.log("pcampana "+pcampana+" remitente "+premitente);
		if(orden=="") porden="";

		var grupos="";
       	        var input = document.getElementsByName('grupo[]');
	        for (var i = 0; i < input.length; i++) {
        	        var a = input[i];
			valor=a.value; 
			che=input[i].checked;
			if(che) 
			{
				if(grupos=="") grupos=valor;
				else grupos=grupos+"|"+valor;
			}
                }

		var ptos="";
       	        var input = document.getElementsByName('pto[]');
	        for (var i = 0; i < input.length; i++) {
        	        var a = input[i];
			valor=a.value; 
			che=input[i].checked;
			if(che) 
			{
				if(ptos=="") ptos=valor;
				else ptos=ptos+"|"+valor;
			}
                }

		//Verificar asunto no tenga caracteres raros
		valid=validar(pasunto);
		validh=validar(ppreheader);
		if(pasunto=="" || ppreheader=="" || (grupos=="" && ptos=="")) 
		{
                	$('.myModalE_body').html('El asunto , el preheader o los destinatarios no pueden estar en blanco');
			$("#myModalE").modal("show");
		}
		else
		{
			if(valid==1 && validh)
			{
				/*
        	        	$.ajax({
                        	type: 'post',
	                        url: '../envio/enviar_email_personalizado.php',
        	                data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id_asunto:pasunto,id_nombre:pnombre,id_preheader:ppreheader,id_campana:pcampana,id_remitente:premitente},
                                success: function(response){
                                       $('.myModalN_body').html('Envío procesado. Ya puede salir y nosotros haremos el resto.'+response);
				       $("#myModalN").modal("show");
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               			});
				*/
				/* ENVIAR AHORA*/
/*	
				var percent = 0;
				timerId = setInterval(function() {
			        //increment progress bar
			        percent += 10;
			        $('.progress-bar').css('width', percent+'%');
			        $('.progress-bar').attr('aria-valuenow', percent);
			        $('.progress-bar').text(percent+'%');

			        //complete
			        if (percent == 100) {
			            clearInterval(timerId);
			            //$('.information').show();
			        }
				}, 1000);
*/
				var pdata = new FormData(document.getElementById("formulario"));  
				pdata.append('grupos',grupos);
				pdata.append('ptos',ptos);
				pdata.append('id_asunto',pasunto);
				pdata.append('id_preheader',ppreheader);
				pdata.append('id_remitente',premitente);

        	                $.ajax({
                                type: 'post',
                                 url: 'guardar_para_enviar.php',
                                 data: pdata,
                                 dataType: 'json',
                                 contentType: false,
                                 cache: false,
                                 processData:false,
				 /*before: function(){
					//$("#myModalN").modal("show");
				 }*/
                                 success: function(response){
					 var obj = JSON.stringify(response);
                                         var objs = JSON.parse(obj);
                                         if (objs.message!=""){
						 console.log(objs.message);
                                       		$('.myModalN_body').html('<div style="text-align:center"><img src="../img/OK.png"><br><br>Envío procesado. Ya puede salir y nosotros haremos el resto.</div>');
					        $("#myModalN").modal("show");
					 }
                                 },
                                 error: function(response) {
                                       obj=JSON.stringify(response); 
                                       console.log('Error en ajax '+obj);
                                  }
                        	});
				
				/* ENVIAR AHORA*/

			}
			else
			{
                		$('.myModalE_body').html('Raro...raro...raro.... El asunto o el preheader no permiten caracteres extraños.');
				/*Para evitar que tu mensaje acabe en una carpeta de SPAM, no debe tener palábras en mayúsculas y evitar conceptos y símbolos especialmente motivantes. Probemos con un asunto concreto y directo.*/
				$("#myModalE").modal("show");
			}
	       }
        });

	$("#volver").on("click", function(event){
               pdatos=$("#datos").val();
	       location.href="../campanas/index.php?datos="+pdatos;
	});

	$("#guardar").on("click", function(event){
               pdatos=$("#datos").val();
               pprofile=$("#id_profile").val();
	       pdencam=$('#id_nombre_camp').val();
	       pasunto=$('#id_asunto').val();
	       pcampana=$('#id_campana').val();
	       ppreheader=$('#id_preheader').val();
	       pdiseno=$('#id_diseno').val();
	
	       $.ajax({
                       type: 'post',
                       url: 'guardar_todo.php',
                       data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id_asunto:pasunto,id_dencam:pdencam,id_preheader:ppreheader,id_campana:pcampana},
                       success: function(response){
			        //console.log(pdiseno);
	       			location.href="../admin.php?datos="+pdatos;
                       },
                       error: function() {
                                       console.log('Error en ajax intercambio');
                       }
               });
	});

	$("#seguir").on("click", function(event){

		pdencam=$('#id_dencamp').val();
		if(pdencam!="")
		{
		//cerrar modal
                $("#myModalCam").removeClass("in");
                $(".modal-backdrop").remove();
                $('body').removeClass('modal-open');
                $('body').css('padding-right', '');
                $("#myModalCam").hide();
		//$('#myModalCam').modal('toggle');
		//$("#myModalCam").modal("hide");
                //cerrar modal

		pdencamp=pdencam;
                $('#id_nombre_camp').val(pdencamp);
	        pnomcam="<span>Nombre de la Campaña: "+pdencamp+"</span>";
                $('#pnomcam').html(pnomcam);
		$('#iasunto').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                $('#id_asunto').val('');
                $('#ipreheader').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
                $('#id_preheader').val('');

                pdatos=$("#datos").val();
                pprofile=$("#id_profile").val();
		pdiseno=0;
		phtml=0;
		pbackground=$("#id_background").val();
                ptamano_letra=$("#id_tamano_letra").val();
                ptipo_letra=$("#id_tipo_letra").val();
                pcolor_letra=$("#id_color_letra").val();
                palineacion=$('input:radio[name=id_alineacion]:checked').val();
                orden=$('#dropfinal3').attr("data-quien");
		pid=0;
		pline="";

		$.ajax({
                        type: 'post',
                        url: 'guardar_modulos.php',
                        data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id_dencam:pdencam,id_background:pbackground,id_tamano_letra:ptamano_letra,id_color_letra:pcolor_letra,id_alineacion:palineacion,id_tipo_letra:ptipo_letra,porden:orden,id:pid,line:pline,id_html:phtml},
                        success: function(response){
                                     diseno=response.split("|");
                                     $("#id_diseno").val(diseno[0]);
				     $("#id_nombre_camp").val(pdencam);
                                     $('#id_campana').val(diseno[7]);
                                     $("#id_html").val(diseno[8]);
                                     console.log('Resp: *'+response+'*\n');
                                     $('.nav-tabs #tab_config').css('display', 'block');
                               },
                        error: function() {
                                  console.log('Error en ajax intercambio');
                              }
               });
	     }
	     else
	     {
              	$('#alerta').html('Debes indicar un nombre para describir tu campaña');
	     }
	});

	function validar(letranum) {

		ok=1;
		// ?!))$&.'!"@&
		contar=letranum.length;
		buscar=letranum.search("&"); 
		if(buscar==-1) ok=1; else ok=0;
		if(ok==1)
		{
			//console.log('1/&');
			buscar=letranum.search("%"); 
			if(buscar==-1) ok=1; else ok=0;
			if(ok==1)
			{
				//console.log('2/%');
				buscar=letranum.search("@"); 
				if(buscar==-1) ok=1; else ok=0;
				if(ok==1)
				{
					//console.log('3/@');
					buscar=letranum.search("\\$"); 
					if(buscar==-1) ok=1; else ok=0;
					if(ok==1)
					{
						//console.log('4/$');
						buscar=letranum.search("#"); 
						if(buscar==-1) ok=1; else ok=0;
						if(ok==1)
						{
							//console.log('4/#');
							buscar=letranum.search("\€"); 
							if(buscar==-1) ok=1; else ok=0;
							if(ok==1)
							{
								//console.log('4/#');
								/*buscar=letranum.search("\""); 
								if(buscar==-1) ok=1; else ok=0;
								if(ok==1)
								{
									//console.log('4/#');
									buscar=letranum.search("\^"); 
									if(buscar==-1) ok=1; else ok=0;
									if(ok==1)
									{
										//console.log('4/#');
									}
								}*/
							}
						}
					}
				}
			}
		}
		//console.log(letranum+' '+ok);
		return ok;
	}

	$("#cerrarCam").on("click", function(event){
		//cerrar modal
                /*$("#myModalCam").removeClass("in");
                $(".modal-backdrop").remove();
                $('body').removeClass('modal-open');
                $('body').css('padding-right', '');
                $("#myModalCam").hide();*/
		//$('#myModalCam').modal('toggle');
                //cerrar modal
                pdatos=$("#datos").val();
		location.href="../admin.php?datos="+pdatos;
	});

	$("#cerrarCams").on("click", function(event){
		//cerrar modal
                /*$("#myModalCams").removeClass("in");
                $(".modal-backdrop").remove();
                $('body').removeClass('modal-open');
                $('body').css('padding-right', '');
                $("#myModalCams").hide();*/
		//$('#myModalCams').modal('toggle');
                //cerrar modal
                pdatos=$("#datos").val();
		location.href="../admin.php?datos="+pdatos;
	});

	$("#cerrarAvi").on("click", function(event){
		//cerrar modal
                /*$("#myModalAvi").removeClass("in");
                $(".modal-backdrop").remove();
                $('body').removeClass('modal-open');
                $('body').css('padding-right', '');
                $("#myModalAvi").hide();*/
		//$('#myModalAvi').modal('toggle');
                //cerrar modal
                pdatos=$("#datos").val();
		location.href="../admin.php?datos="+pdatos;
	});

	$("#id_asunto").on("change", function(event){
		pasunto=$('#id_asunto').val();
                if(pasunto!="") $('#iasunto').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
		else $('#iasunto').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
	});
	$("#id_preheader").on("change", function(event){
		ppreheader=$('#id_preheader').val();
                if(ppreheader!="") $('#ipreheader').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
		else $('#ipreheader').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
	});


	 $("#enviar_test").on("click", function(event){
                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                phtml=$("#id_html").val();
                pasunto=$("#id_asunto").val();
                pnombre=$("#id_nombre").val(); 
                ppreheader=$("#id_preheader").val();
                pcampana=$("#id_campana").val();
                premitente=$("#id_remitente").val();

                //Verificar asunto no tenga caracteres raros
                valid=validar(pasunto);
                validh=validar(ppreheader);
                if(pasunto=="" || ppreheader=="")
                {
                        $('.myModalE_body').html('El asunto o el preheader no pueden estar en blanco');
                        $("#myModalE").modal("show");
                }
                else
                {
                        if(valid==1 && validh)
                        {
                                $.ajax({
                                type: 'post',
                                url: '../envio/enviar_email_test.php',
                                data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id_asunto:pasunto,id_nombre:pnombre,id_preheader:ppreheader,id_campana:pcampana,id_remitente:premitente,id_html:phtml},
                                success: function(response){
                                       $('.myModalE_body').html('<span style="color:green">Su correo de test de ha enviado correctamente</span>');
                                       $("#myModalE").modal("show");
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
                                });

                        }
                        else
                        {
                                $('.myModalE_body').html('Raro...raro...raro.... El asunto o el preheader no permiten caracteres extraños.');
                                $("#myModalE").modal("show");
                        }
               }
        });

	$("#seguirs").on("click", function(event){

             pdencamp=$('#id_dencamps').val();
	     phtml=$('#id_html').val(); //OJO SI ES HTML NO DEBE HACERSE ESTO

             if(pdencamp!="")
             {
		//cerrar modal
                /*$("#myModalCams").removeClass("in");
                $(".modal-backdrop").remove();
                $('body').removeClass('modal-open');
                $('body').css('padding-right', '');
                $("#myModalCams").hide();*/
	        //$('#myModalCams').modal('toggle');

                pdiseno=$('#id_diseno').val();
                pprofile=$('#id_profile').val();
                pdatos=$('#datos').val();
                pcampana=$('#id_campana').val();
                $('#id_nombre_camp').val(pdencamp);
	        pnomcam="<span>Nombre de la Campaña: "+pdencamp+"</span>";
                $('#pnomcam').html(pnomcam);
                //pongo los valores por defecto
                $.ajax({
                        type: 'post',
                         url: 'valores_defecto.php',
                               data:{id_profile:pprofile,id_diseno:pdiseno,datos:pdatos,id_dencamp:pdencamp,id_campana:pcampana},
                               success: function(response){
                                       console.log(response);
				       $.each(response.result, function () {
                                       back=this.Back;
                                       taml=this.Taml;
                                       coll=this.Coll;
                                       tipo=this.Tipo;
                                       alig=this.Alig;
                                       orde=this.Orde;
                                       $("#config #id_background").val(back);
                                       $("#dropfinal3").css("background-color", back);
                                       //$("#config #id_tamano_letra").val(diseno[1]);
                                       $('#config #id_tamano_letra option[value='+taml+']').attr('selected','selected');
                                       $("#dropfinal3").css("font-size", taml);
                                       $("#config #id_color_letra").val(coll);
                                       $("#dropfinal3").css("color", coll);
                                       //$("#id_tipo_letra").val(diseno[3]);
                                       $('#config #id_tipo_letra option[value="'+tipo+'"]').attr('selected','selected');
                                       $("#dropfinal3").css("font-family", tipo);
                                       //$('input:radio[name=id_alineacion]:checked').val();
                                       $('#config input[name=id_alineacion][value='+alig+']').attr('checked', 'checked');
                                       $("#dropfinal3").css("text-align", alig);
                                       $("#dropfinal3").attr("data-quien",orde);
                                       $("#id_nombre_camp").val(pdencamp);
                                       pquien=orde;
				       console.log('QUIEN '+pquien);
                                       if(pquien!="")
                                       {
                                                $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                                $("#enviar_test").removeAttr('disabled');
                                                $("#enviar_ahora").removeAttr('disabled');
                                                $("#programar").removeAttr('disabled');
                                                $("#guardar").removeAttr('disabled');
                                       }
				       })
                                },
                                error: function() {
                                       console.log('Error en ajax intercambio');
                                }
               });
	       //pongo los módulos del diseno
	       if(phtml==0)
		     {
		 $.ajax({
			 type: 'post',
			 dataType: "json",
                         url: 'modulos_diseno.php',
                               data:{id_profile:pprofile,id_diseno:pdiseno,datos:pdatos},
                               success: function(response){
				       console.log(response);
				       if(response.ok)
				       {
					       var cant_texto=1; var cant_imagen=1; var cant_dividir=1;
					       var cant_espacio=1;var cant_boton=1; var cant_web_email=1;
					       var cant_imagen_texto=1; var cant_redes_sociales=1;
					       var cant_img_gif=1; var cant_mod_adj=1;
					       prim=1;
					       $.each(response.result, function () {
					       tipo=this.Tipo; console.log('tipo '+tipo);
					       if(tipo=="texto")
					       {
						       codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_texto=parseInt(can[1])+1;
						        if((parseInt(can[1])+1)>cant_texto) cant_texto=parseInt(can[1])+1;
							//suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
							var nodeCopy = document.createElement('div');
							if(this.Texto=="")
								pvalor = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width='100%' onclick='editar_general()'><tr><td><span>Escribe aquí tu texto</span></td></tr></table>"; //Texto
							else pvalor=this.Texto;
							nodeCopy.innerHTML = suma+pvalor;
                                                        nodeCopy.setAttribute("data-tipo","texto");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
							nodeCopy.setAttribute("data-quien",this.Cual);								
							nodeCopy.setAttribute("id",this.Codigo);								
							nodeCopy.setAttribute("data-id",this.Codigo);								
							nodeCopy.setAttribute("class","mov_modulos");								
							nodeCopy.setAttribute("draggable","true");								
      			       				nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'texto');
							$("#dropfinal3").append(nodeCopy);
				       	       		$("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="imagen")
                                               {
						       codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_imagen=parseInt(can[1])+1;
						        if((parseInt(can[1])+1)>cant_imagen) cant_imagen=parseInt(can[1])+1;
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
							var nodeCopy = document.createElement('div');
							wid=this.Width*this.Tanto/100; if(wid>600) wid=600;
                                                        if(this.Imagen=="")
                                                                pvalor = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width='100%' onclick='editar_general()'><tr><td><p style='text-align:center;margin-bottom:0px;'><img src='../img/imagen.png' alt='Imagen' style='display:block; margin:0px auto;' data-link_imagen='' data-alinear_imagen='' data-width='100' data-ids='"+this.Codigo+"' data-tanto='100' data-id='"+this.Codigo+"' id='"+this.Codigo+"'>Subir una imagen</p></td></tr></table>"; //imagen
                                                        else
                                                                pvalor = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width='100%' onclick='editar_general()'><tr><td><p style='text-align:"+this.Alinear+";margin-bottom:0px;'><img src='"+this.Imagen+"' alt='"+this.Alt+"' data-link_imagen='"+this.Link+"' data-alinear_imagen='"+this.Alinear+"' data-width='"+this.Width+"' data-ids='"+this.Codigo+"' width='"+wid+"' data-tanto='"+this.Tanto+"' data-id='"+this.Codigo+"' id='"+this.Codigo+"'></p></td></tr></table>"; //imagen
                                                        nodeCopy.innerHTML = suma+pvalor;
                                                        nodeCopy.setAttribute("data-tipo","imagen");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
      			       				nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'imagen');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="dividir")
                                               {
						        codigo=this.Codigo; console.log(codigo);
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_dividir=parseInt(can[1])+1;
						        if((parseInt(can[1])+1)>cant_dividir) cant_dividir=parseInt(can[1])+1;
						        //cant_dividir=cant_dividir+1;
						        //p-t, p-b, h, color
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
							var nodeCopy = document.createElement('div');
							if(this.Color=="") color="#dedede"; else color=this.Color;
                                                        pvalor = "<div onclick='editar_general()' style='padding-top:5px;padding-bottom:5px' ><hr style='opacity:1;background-color:"+color+";height:"+this.Height+"px;margin-top:"+this.PaddingT+"px;margin-bottom:"+this.PaddingB+"px; '></div>";
							nodeCopy.innerHTML = suma+pvalor;
                                                        nodeCopy.setAttribute("data-tipo","dividir");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
							nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'dividir');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="espacio")
                                               {
						        codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_espacio=parseInt(can[1])+1;
						        if((parseInt(can[1])+1)>cant_espacio) cant_espacio=parseInt(can[1])+1;
							var nodeCopy = document.createElement('div');
							if(this.Height=="") 
                                                        	pvalor = "50px";
							else
	                                                        pvalor = this.Height+"px";
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
                                                        nodeCopy.innerHTML = suma+"<p style='background-color:#dedede;height:"+pvalor+";margin-bottom:0px' onclick='editar_general()'></p>";
                                                        nodeCopy.setAttribute("data-tipo","espacio");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
      			       				nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'espacio');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="boton")
					       {
						        codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_boton=parseInt(can[1])+1;
						        if((parseInt(can[1])+1)>cant_boton) cant_boton=parseInt(can[1])+1;
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>"; //button
                                                        var nodeCopy = document.createElement('div');
                                                        nodeCopy.innerHTML = suma+"<div style='text-align:center' onclick='editar_general()'><button type='button' class='btn btn-secondary' data-link_boton='"+this.Link+"' style='color:"+this.ColorT+";background-color:"+this.ColorB+";border: 1px solid "+this.ColorB+"'>"+this.Texto+"</button></div>"; //button
                                                        nodeCopy.setAttribute("data-tipo","boton");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
      			       				nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'boton');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="web_email")
                                               {
						        codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_web_email=parseInt(can[1])+1;
						       if((parseInt(can[1])+1)>cant_web_email) cant_web_email=parseInt(can[1])+1;
                                                        var nodeCopy = document.createElement('div');
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>"; //button
                                                        nodeCopy.innerHTML = suma+"<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td><div style='padding:5px;text-align:center'><img src='../img/icono_web.png' width='32' height='32' data-web='"+this.UWeb+"'></div></td><td><div style='padding:5px;text-align:center'><img src='../img/icono_email.png' width='32' height='32' data-email='"+this.UEmail+"'></div></td></tr></table>"; //button
                                                        nodeCopy.setAttribute("data-tipo","web_email");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
      			       				nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'web_email');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
                                               }
					       if(tipo=="imagen_texto")
                                               {
						       codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						       can=codigo.split("_");
						       //cant_imagen_texto=parseInt(can[1])+1;
						       if((parseInt(can[1])+1)>cant_imagen_texto) cant_imagen_texto=parseInt(can[1])+1;
						       console.log(this.Texto);
							var nodeCopy = document.createElement('div');
							wid=this.Width*this.Tanto/100; if(wid>300) wid=300;
							if(this.Alinear=="center") pestilo="style='text-align:center'";
							else pestilo="style='float:"+this.Alinear+"'";
							poner="NADA";
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>"; //button
							tpos=this.Posicion; 
							if(tpos==0) tpos=3;
                		                        if(tpos==1)
                                		        { //left
                                                		poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td width='50%'><p "+pestilo+"><img src='"+this.Imagen+"' alt='"+this.Alt+"' style='display:block; margin:0px auto;' data-link_imagen='"+this.Link+"' data-alinear_imagen='"+this.Alinear+"' data-width='"+this.Width+"' width='"+wid+"' data-ids='"+this.Codigo+"' data-tanto='"+this.Tanto+"' data-posicion='"+this.Posicion+"' data-id='"+this.Codigo+"' id='"+this.Codigo+"' ></p></td><td width='50%'><span>"+this.Texto+"</span></td></tr></table>";
		                                        }
                		                        else
                                		        {
                                                		if(tpos==2)
		                                                {//right
                		                                        poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td width='50%'><span>"+this.Texto+"</span></td><td width='50%'><p "+pestilo+"><img src='"+this.Imagen+"' alt='"+this.Alt+"' style='display:block; margin:0px auto;' data-link_imagen='"+this.Link+"' data-alinear_imagen='"+this.Alinear+"' data-width='"+this.Width+"' width='"+wid+"' data-ids='"+this.Codigo+"' data-tanto='"+this.Tanto+"' data-posicion='"+this.Posicion+"' data-id='"+this.Codigo+"' id='"+this.Codigo+"'></p></td></tr></table>";
                                		                }
                                                		else
		                                                {
                		                                        if(tpos==3)
                                		                        {//top
                                                		                poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td width='50%'><p "+pestilo+"><img src='"+this.Imagen+"' alt='"+this.Alt+"' style='display:block; margin:0px auto;' data-link_imagen='"+this.Link+"' data-alinear_imagen='"+this.Alinear+"' data-width='"+this.Width+"' width='"+wid+"' data-ids='"+this.Codigo+"' data-tanto='"+this.Tanto+"' data-posicion='"+this.Posicion+"' data-id='"+this.Codigo+"' id='"+this.Codigo+"'></p></td></tr><tr><td width='50%'><span>"+this.Texto+"</span></td></tr></table>";
                                                        		}
		                                                        else
                		                                        {
                                		                                if(tpos==4)
                                                		                {//right
                                                                		        poner="<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr><td width='50%'><span>"+this.Texto+"</span></td></tr><tr><td width='50%'><p "+pestilo+"><img src='"+this.Imagen+"' alt='"+this.Alt+"' style='display:block; margin:0px auto;' data-link_imagen='"+this.Link+"' data-alinear_imagen='"+this.Alinear+"' data-width='"+this.Width+"' width='"+wid+"' data-ids='"+this.Codigo+"' data-tanto='"+this.Tanto+"' data-posicion='"+this.Posicion+"' data-id='"+this.Codigo+"' id='"+this.Codigo+"'></p></td></tr></table>";
		                                                                }
                		                                        }
								}
                                        		}
						
                                                        nodeCopy.innerHTML = suma+poner;
                                                        nodeCopy.setAttribute("data-tipo","imagen_texto");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'imagen_texto');
      			       				nodeCopy.classList.add('droppable'); 
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="redes_sociales")
					       {
						       codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						       can=codigo.split("_");
						       //cant_redes_sociales=parseInt(can[1])+1;
						       if((parseInt(can[1])+1)>cant_redes_sociales) cant_redes_sociales=parseInt(can[1])+1;
							var nodeCopy = document.createElement('div');
							id_contar=0;
							//if(this.URed!="") { id_contar++; id_facebook="<td><div style='padding:5px;text-align:center'><img src='../img/icono_facebook.png' width='32' height='32' data-facebook='"+this.URed+"'></div></td>"; } else id_facebook="";
							id_contar++; 
							id_facebook="<td><div style='padding:5px;text-align:center'><img src='../img/icono_facebook.png' width='32' height='32' data-facebook='"+this.URed+"'></div></td>"; 
							if(this.URed2!="") { id_contar++; id_twitter="<td><div style='padding:5px;text-align:center'><img src='../img/icono_twitter.png' width='32' height='32' data-twitter='"+this.URed2+"'></div></td>"; } else id_twitter="";
							if(this.URed3!="") { id_contar++; id_instagram="<td><div style='padding:5px;text-align:center'><img src='../img/icono_instagram.png' width='32' height='32' data-instagram='"+this.URed3+"'></div></td>"; } else id_instagram="";
							if(this.URed4!="") { id_contar++; id_linkedin="<td><div style='padding:5px;text-align:center'><img src='../img/icono_linkedin.png' width='32' height='32' data-linkedin='"+this.URed4+"'></div></td>"; } else id_linkedin="";
							if(this.URed5!="") { id_contar++; id_youtube="<td><div style='padding:5px;text-align:center'><img src='../img/icono_youtube.png' width='32' height='32' data-youtube='"+this.URed5+"'></div></td>"; } else id_youtube="";
							if(this.URed6!="") { id_contar++; id_pinterest="<td><div style='padding:5px;text-align:center'><img src='../img/icono_pinterest.png' width='32' height='32' data-pinterest='"+this.URed6+"'></div></td>"; } else id_pinterest="";
							if(this.URed7!="") { id_contar++; id_bandcamp="<td><div style='padding:5px;text-align:center'><img src='../img/icono_bandcamp.png' width='32' height='32' data-bandcamp='"+this.URed7+"'></div></td>"; } else id_bandcamp="";
							if(this.URed8!="") { id_contar++; id_soundcloud="<td><div style='padding:5px;text-align:center'><img src='../img/icono_soundcloud.png' width='32' height='32' data-soundcloud='"+this.URed8+"'></div></td>"; } else id_soundcloud="";
							if(this.URed9!="") { id_contar++; id_vimeo="<td><div style='padding:5px;text-align:center'><img src='../img/icono_vimeo.png' width='32' height='32' data-vimeo='"+this.URed9+"'></div></td>"; } else id_vimeo="";
							if(this.URed10!="") { id_contar++; id_flickr="<td><div style='padding:5px;text-align:center'><img src='../img/icono_flickr.png' width='32' height='32' data-flickr='"+this.URed10+"'></div></td>"; } else id_flickr="";
							if(this.URed11!="") { id_contar++; id_spotify="<td><div style='padding:5px;text-align:center'><img src='../img/icono_spotify.png' width='32' height='32' data-spotify='"+this.URed11+"'></div></td>"; } else id_spotify="";

							datos_redes="<div id='redes' style='visibility:hidden;' data-spotify='"+this.URed11+"' data-flickr='"+this.URed10+"' data-vimeo='"+this.URed9+"' data-soundcloud='"+this.URed8+"' data-bandcamp='"+this.URed7+"' data-pinterest='"+this.URed6+"' data-youtube='"+this.URed5+"' data-linkedin='"+this.URed4+"' data-instagram='"+this.URed3+"' data-twitter='"+this.URed2+"' data-facebook='"+this.URed+"'></div>";
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>"; //button
                                                        nodeCopy.innerHTML = datos_redes+suma+"<table border='0' cellspacing='0' cellpadding='0' width='100%' onclick='editar_general()'><tr>"+id_facebook+id_twitter+id_instagram+id_linkedin+id_youtube+id_pinterest+id_bandcamp+id_soundcloud+id_vimeo+id_flickr+id_spotify+"</tr></table>"; //button
                                                        nodeCopy.setAttribute("data-tipo","redes_sociales");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'redes_sociales');
      			       				nodeCopy.classList.add('droppable'); 
                                                        $("#dropfinal3").append(nodeCopy);
							$("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
							
					       }
					       if(tipo=="img_gif")
                                               {
						       codigo=this.Codigo;
						       valor=codigo;
						       if(prim==1)
						       {
							       //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
								$("#dropfinal3").append(nodeCopya);
								prim=0;
						       }
						        can=codigo.split("_");
						        //cant_imagen=parseInt(can[1])+1;
						        if((parseInt(can[1])+1)>cant_img_gif) cant_img_gif=parseInt(can[1])+1;
							suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>";
							var nodeCopy = document.createElement('div');
							wid=this.Width*this.Tanto/100; if(wid>600) wid=600;
                                                        if(this.Imagen=="")
                                                                pvalor = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width='100%' onclick='editar_general()'><tr><td><p style='text-align:center;margin-bottom:0px;'><img src='../img/imagen.png' alt='Imagen' style='display:block; margin:0px auto;' data-link_imagen='' data-alinear_imagen='' data-width='100' data-ids='"+this.Codigo+"' data-tanto='100' data-id='"+this.Codigo+"' id='"+this.Codigo+"'>Subir una imagen</p></td></tr></table>"; //imagen
                                                        else
                                                                pvalor = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width='100%' onclick='editar_general()'><tr><td><p style='text-align:"+this.Alinear+";margin-bottom:0px;'><img src='"+this.Imagen+"' alt='"+this.Alt+"' data-link_imagen='"+this.Link+"' data-alinear_imagen='"+this.Alinear+"' data-width='"+this.Width+"' data-ids='"+this.Codigo+"' width='"+wid+"' data-tanto='"+this.Tanto+"' data-id='"+this.Codigo+"' id='"+this.Codigo+"'></p></td></tr></table>"; //imagen
                                                        nodeCopy.innerHTML = suma+pvalor;
                                                        nodeCopy.setAttribute("data-tipo","img_gif");
							nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
      			       				nodeCopy.classList.add('droppable'); 
							nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
							nodeCopy.setAttribute("data-estoy",'dropfinal3');
							nodeCopy.setAttribute("data-modi",'img_gif');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
							$("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
					       }
					       if(tipo=="mod_adj")
                                               {
                                                       codigo=this.Codigo;
                                                       valor=codigo;
                                                       if(prim==1)
                                                       {
                                                               //zona droppable antes
                                                                var nodeCopya = document.createElement('div');
                                                                nodeCopya.classList.add('droppable'); //VOLVER A PONER
                                                                nodeCopya.setAttribute("data-estoy",'dropfinal3a');
                                                                //nodeCopyd.setAttribute("data-modi",'dropa');
                                                                nodeCopya.setAttribute("data-id","a"+valor);
                                                                nodeCopya.setAttribute("id","a"+valor);
                                                                nodeCopya.style.paddingTop = "5%";
                                                                $("#dropfinal3").append(nodeCopya);
                                                                prim=0;
                                                       }
                                                        can=codigo.split("_");
                                                        //cant_boton=parseInt(can[1])+1;
                                                        if((parseInt(can[1])+1)>cant_mod_adj) cant_mod_adj=parseInt(can[1])+1;
                                                        suma="<div class='button-container' style='display:none'><a href='javascript:editar_general()'><i class=\"far fa-edit\" style=\"font-size:16px;color:#000000;\"></i></a><a href='javascript:borrar_general()'><i class=\"fas fa-trash-alt\" style=\"font-size:16px;color:#000000;\"></i></a><i class=\"fas fa-arrows-alt\" style=\"font-size:16px;color:#000000;\"></i></div>"; //button
                                                        var nodeCopy = document.createElement('div');
                                                        nodeCopy.innerHTML = suma+"<div style='text-align:center' onclick='editar_general()'><button type='button' class='btn btn-secondary' data-link_boton_adj='"+this.Link+"' data-nombre_url_adj='"+this.Nombre+"' style='color:"+this.ColorT+";background-color:"+this.ColorB+";border: 1px solid "+this.ColorB+"'>"+this.Texto+"</button></div>"; //button
                                                        nodeCopy.setAttribute("data-tipo","mod_adj");
                                                        nodeCopy.style.paddingTop = "5px";
                                                        nodeCopy.style.paddingBottom = "5px";
                                                        nodeCopy.setAttribute("data-quien",this.Cual);
                                                        nodeCopy.setAttribute("id",this.Codigo);
                                                        nodeCopy.setAttribute("data-id",this.Codigo);
                                                        nodeCopy.setAttribute("class","mov_modulos");
                                                        nodeCopy.setAttribute("draggable","true");
                                                        nodeCopy.classList.add('droppable');
                                                        nodeCopy.setAttribute("ondragstart","dragStart(event)"); //DRAG
                                                        nodeCopy.setAttribute("data-estoy",'dropfinal3');
                                                        nodeCopy.setAttribute("data-modi",'mod_adj');
                                                        $("#dropfinal3").append(nodeCopy);
                                                        $("#dropfinal3").attr("data-quien",this.Quien);
                                                        //zona droppable despues
                                                        var nodeCopyd = document.createElement('div');
                                                        nodeCopyd.classList.add('droppable'); //VOLVER A PONER
                                                        nodeCopyd.setAttribute("data-estoy",'dropfinal3d');
                                                        nodeCopyd.setAttribute("data-id","d"+valor);
                                                        nodeCopyd.setAttribute("id","d"+valor);
                                                        nodeCopyd.style.paddingTop = "5%";
                                                        $("#dropfinal3").append(nodeCopyd);
                                                        //zona droppable
                                               }
					       })
				       	       $("#diseno .modulo_esp .modulo_texto").attr("data-cuantos",cant_texto); console.log('cuantos',cant_texto);
				       	       $("#diseno .modulo_esp .modulo_imagen").attr("data-cuantos",cant_imagen); console.log('cuantos',cant_imagen);
				       	       $("#diseno .modulo_esp .modulo_dividir").attr("data-cuantos",cant_dividir); console.log('cuantos',cant_dividir);
				       	       $("#diseno .modulo_esp .modulo_espacio").attr("data-cuantos",cant_espacio); console.log('cuantos',cant_espacio);
				       	       $("#diseno .modulo_esp .modulo_boton").attr("data-cuantos",cant_boton); console.log('cuantos',cant_boton);
				       	       $("#diseno .modulo_esp .modulo_web_email").attr("data-cuantos",cant_web_email); console.log('cuantos',cant_web_email);
				       	       $("#diseno .modulo_esp .modulo_imagen_texto").attr("data-cuantos",cant_imagen_texto); console.log('cuantos',cant_imagen_texto);
				       	       $("#diseno .modulo_esp .modulo_redes_sociales").attr("data-cuantos",cant_redes_sociales); console.log('cuantos',cant_redes_sociales);
				       	       $("#diseno .modulo_esp .modulo_img_gif").attr("data-cuantos",cant_img_gif); console.log('cuantos',cant_img_gif);
				       	       $("#diseno .modulo_esp .modulo_mod_adj").attr("data-cuantos",cant_mod_adj); console.log('cuantos',cant_mod_adj);
				       }
				       else{
					       //No hay lineas de Texto
				       }
                                },
                                error: function() {
                                       console.log('Error en poner modulo diseno');
                                }
               });
	        }
                else
                {//poner plantilla html
                         $.ajax({
                         type: 'post',
                         dataType: "json",
                         url: 'recoger_html.php',
                               data:{id_profile:pprofile,id_diseno:pdiseno,datos:pdatos},
                               success: function(response){
                                       console.log(response);
                                       if(response.ok)
                                       {
                                        //$("#myModalHTML").modal("hide");
                                        fichero="<iframe src='"+response.msg+"' width='100%' height='750px'></iframe>";
                                        $("#dropfinal3").html(fichero);
                                        $('#imodulos').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                                        $("#enviar_test").removeAttr('disabled');
                                        $("#enviar_ahora").removeAttr('disabled');
                                        $("#programar").removeAttr('disabled');
                                        $("#guardar").removeAttr('disabled');
                                        $("#id_html").val(1);
                                        $( "#modulo_esconder" ).css('display','none'); //Módulo Diseño
                                       }
                              }
                          });
                }

             }
        });

	$("#base_pto").on("click", function(event){
		$("#myModalPTO").modal("show");
	});

	$("#salir_pto").on("click", function(event){
                //cerrar modal
                $('#myModalPTO').modal('toggle');

                var grupos="";
                var input = document.getElementsByName('pto[]');
                for (var i = 0; i < input.length; i++) {
                        var a = input[i];
                        valor=a.value;
                        che=input[i].checked;
                        if(che)
                        {
                                if(grupos=="") grupos=valor;
                                else grupos=grupos+"|"+valor;
                        }
                }

                if(grupos!="") $('#idestinatario').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                else $('#idestinatario').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');
		//seleccionar_contactos
		if(grupos=="")
			$('#seleccionar_contactos').attr('disabled', false);
		else
			$('#seleccionar_contactos').attr('disabled', true);
        });


	$("#seleccionar_contactos").on("click", function(event){
		$("#myModalGrupos").modal("show");
	});

	$("#salir_grupo").on("click", function(event){
                //cerrar modal
		$('#myModalGrupos').modal('toggle');

		var grupos="";
                var input = document.getElementsByName('grupo[]');
                for (var i = 0; i < input.length; i++) {
                        var a = input[i];
                        valor=a.value;
                        che=input[i].checked;
                        if(che)
                        {
                                if(grupos=="") grupos=valor;
                                else grupos=grupos+"|"+valor;
                        }
                }

		if(grupos!="") $('#idestinatario').html('<i class="fa fa-check" style="font-size:16px;color:green;"></i>');
                else $('#idestinatario').html('<i class="fa fa-times" style="font-size:20px;color:red;"></i>');

		if(grupos=="")
			$('#base_pto').attr('disabled', false);
		else
			$('#base_pto').attr('disabled', true);

	});

	$("#id_help").on("click", function(event){
		$("#myModalH").modal("show");
	});

	$("#programar").on("click", function(event){
		$("#myModalP").modal("show");
	});

	$("#boton_html").on("click", function(event){
                sihtml=$("#id_html").val();
		if(sihtml==1)
			$("#myModalHT").modal("show");
		else
			$("#myModalHTML").modal("show");
	});
	$("#cambiar_html").on("click", function(event){
		$('#myModalHT').modal('toggle');

		$("#myModalHTML #idtexto").css('display','block');
		$("#myModalHTML #idtextoa").css('display','none');
		$("#myModalHTML #idtextos").css('display','none');

		$("#myModalHTML").modal("show");
	});


	$("#guardar_programar").on("click", function(event){

		$('#myModalP').modal('toggle');

                pfecha=$("#fecha").val();
                phora=$("#hora").val();

                pprofile=$("#id_profile").val();
                pdatos=$("#datos").val();
                pdiseno=$("#id_diseno").val();
                pasunto=$("#id_asunto").val();
                pnombre=$("#id_nombre").val();
                ppreheader=$("#id_preheader").val();
                pcampana=$("#id_campana").val();
		orden=$('#dropfinal3').attr("data-quien");
                premitente=$("#id_remitente").val();
		console.log("pcampana "+pcampana+" remitente "+premitente);
		if(orden=="") porden="";

		var grupos="";
       	        var input = document.getElementsByName('grupo[]');
	        for (var i = 0; i < input.length; i++) {
        	        var a = input[i];
			valor=a.value; 
			che=input[i].checked;
			if(che) 
			{
				if(grupos=="") grupos=valor;
				else grupos=grupos+"|"+valor;
			}
                }

		var ptos="";
                var input = document.getElementsByName('pto[]');
                for (var i = 0; i < input.length; i++) {
                        var a = input[i];
                        valor=a.value;
                        che=input[i].checked;
                        if(che)
                        {
                                if(ptos=="") ptos=valor;
                                else ptos=ptos+"|"+valor;
                        }
                }

		//Verificar asunto no tenga caracteres raros
		valid=validar(pasunto);
		validh=validar(ppreheader);
		if(pasunto=="" || ppreheader=="" || (grupos=="" && ptos=="")) 
		{
                	$('.myModalE_body').html('El asunto , el preheader o los destinatarios no pueden estar en blanco');
			$("#myModalE").modal("show");
		}
		else
		{
			if(valid==1 && validh)
			{
        	        	//$.ajax({
                        	//type: 'post',
	                        //url: '../envio/enviar_email_personalizado.php',
        	                //data:{id_profile:pprofile,datos:pdatos,id_diseno:pdiseno,id_asunto:pasunto,id_nombre:pnombre,id_preheader:ppreheader,id_campana:pcampana,id_remitente:premitente},
                                //success: function(response){
                                //       $('.myModalN_body').html('Envío procesado. Ya puede salir y nosotros haremos el resto.'+response);
				//       $("#myModalN").modal("show");
                                //},
                                //error: function() {
                                //       console.log('Error en ajax intercambio');
                               // }
                		//	});
				
				// ENVIAR AHORA
				var pdata = new FormData(document.getElementById("formulario"));  
				pdata.append('grupos',grupos);
				pdata.append('ptos',ptos);
				pdata.append('id_asunto',pasunto);
				pdata.append('id_preheader',ppreheader);
				pdata.append('id_remitente',premitente);
				pdata.append('id_fechaprog',pfecha);
				pdata.append('id_horaprog',phora);

        	                $.ajax({
                                type: 'post',
                                 url: 'guardar_para_enviar_programar.php',
                                 data: pdata,
                                 dataType: 'json',
                                 contentType: false,
                                 cache: false,
                                 processData:false,
                                 success: function(response){
					 var obj = JSON.stringify(response);
                                         var objs = JSON.parse(obj);
                                         if (objs.message!=""){
						 console.log(objs.message);
                                       		$('.myModalN_body').html('<div style="text-align:center"><img src="../img/OK.png"><br><br>Envío procesado. Ya puede salir y nosotros haremos el resto.</div>');
					        $("#myModalN").modal("show");
					 }
                                 },
                                 error: function(response) {
                                       obj=JSON.stringify(response); 
                                       console.log('Error en ajax '+obj);
                                  }
                        	});
				
				// ENVIAR AHORA

			}
			else
			{
                		$('.myModalE_body').html('Raro...raro...raro.... El asunto o el preheader no permiten caracteres extraños.');
				//Para evitar que tu mensaje acabe en una carpeta de SPAM, no debe tener palábras en mayúsculas y evitar conceptos y símbolos especialmente motivantes. Probemos con un asunto concreto y directo.
				$("#myModalE").modal("show");
			}
	       }
        });
