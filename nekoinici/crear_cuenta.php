<?php
require_once ("conectar.php");
require_once ("includes/public_home_i18n.php");

$pid_email=$_GET['pid_email'];
$pid_password=$_GET['pid_password'];
$idioma=public_home_resolve_language(isset($_GET['idioma']) ? $_GET['idioma'] : null);

$sel="select id_profile from news_profile where id_usuario='$pid_email' and id_password='$pid_password'";
$res=$mysqli->query($sel);
if($res->num_rows==0)
{
	$selim="insert into news_profile (id_nombre,id_email_envio,id_email_respuesta,id_portal,id_validado,id_usuario,id_password) values ('$pid_email','$pid_email','$pid_email','1','0','$pid_email','$pid_password')";
	$reslim=$mysqli->query($selim);
	if($reslim)
	{
		$estado=1;
		include "envio/enviar_email.php";
		include "envio/enviar_email_copia.php";
		$msg=$mostrarmensaje;
	}
	else
	{
        	$estado=0;
		$msg=public_home_text("error",$idioma);
	}
}
else
{
       	$estado=0;
	$msg=public_home_text("existing_email",$idioma);
}
$response = array(
    'estado' =>  $estado,
    'msg' =>  $msg
);
$myJSON = json_encode($response);
echo $myJSON;
?>
