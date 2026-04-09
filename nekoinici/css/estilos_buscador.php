<?php
        header('Content-type: text/css');

        include "../conectar.php";
        $fondo="#ffffff";
        $queryb="select * from news_colores";
        $rs_queryb=$mysqli->query($queryb);
        $totalb=$rs_queryb->num_rows;
        if($totalb>0)
        {
                $i=0;
                while($i<$totalb)
                {
                        $filab=$rs_queryb->fetch_array();
                        if($filab["id_tipo"]=="fondo") $fondo=$filab["id_valor"];
                        if($filab["id_tipo"]=="fondomod1") $fondomod1=$filab["id_valor"];
                        if($filab["id_tipo"]=="fondomod2") $fondomod2=$filab["id_valor"];
                        if($filab["id_tipo"]=="fondomod3") $fondomod3=$filab["id_valor"];
                        if($filab["id_tipo"]=="colorpie") $colorpie=$filab["id_valor"];
                        if($filab["id_tipo"]=="fondotermi") $fondotermi=$filab["id_valor"];
                        if($filab["id_tipo"]=="fondoboton") $fondoboton=$filab["id_valor"];
                        if($filab["id_tipo"]=="colorboton") $colorboton=$filab["id_valor"];
                        $i++;
                }
        }

        $queryb="select * from news_panel";
        $rs_queryb=$mysqli->query($queryb);
        $totalb=$rs_queryb->num_rows;
        if($totalb>0)
        {
                $filab=$rs_queryb->fetch_array();
                $id_logo_movil=$filab['id_logo_movil'];
                $id_url_panel=$filab['id_url_panel'];
                if($id_logo_movil!="") $id_logo_movil=$id_url_panel."/".$id_logo_movil;
        }

?>
	.textos{
	    font-family: Means Web,Georgia,Times,Times New Roman,serif;
	    font-weight: 400;
	    color: #646464;
	    font-size:40px;
	    padding:10%;
	}
	.iniciar{
	    font-family: Means Web,Georgia,Times,Times New Roman,serif;
	    font-weight: 400;
	    color: #62cec8;
	}
	.fondoboton{
                background-color: <?php echo $fondoboton?>;
	}

	.colorboton{
                color: <?php echo $colorboton?>;
	}

	.class_div {
       		border: 1px solid <?php echo $fondo?>;
	       -moz-border-radius: 12px;
	       -webkit-border-radius: 12px;
	       padding: 5px;
	}

	#content{
                background-color: <?php echo $fondo?>;
        }

        .div_gris2{
                background-color: <?php echo $fondotermi?>;
                -moz-border-radius: 6px;
                -webkit-border-radius: 6px;
        }

        .div_gris{
                border:0px;
                background-color:<?php echo $fondotermi?>;
                padding-top:6px;
                padding-bottom:6px;
                font-size:16px;
	}

	.class_pie_row{
		background-color: <?php echo $colorpie?>;
		color: #fff;
	}

	.recuadro_banner {
        	border: 1px solid #999999;
	        width: 500px;
        	height: 150px;
	        background-color: #FFFFFF;

        	/* Que quede la imagen centrada (la imagen debe ser un fondo) */
	        background-position: 50% 50%;
        	background-repeat: no-repeat;
	}

	.recuadro_logo {
        	border: 1px solid #999999;
	        width: 600px;
        	height: 150px;
	        background-color: #FFFFFF;

        	/* Que quede la imagen centrada (la imagen debe ser un fondo) */
	        background-position: 50% 50%;
	        background-repeat: no-repeat;
	}

	#id_logo {
        	display:block;
	}

	#id_logo_movil {
	        display:none;
	}

	@media (max-width:768px){

                #id_logo {
                        display:none;
                }

                #id_logo_movil {
                        display:block;
                }
	}




