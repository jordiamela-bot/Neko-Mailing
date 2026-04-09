<?php
// función de gestión de errores
function miGestorDeErrores($errno, $errstr, $errfile, $errline)
{
	global $mysqli;
	$fecha=date('Y-m-d'); $hora=date('H:i:s');

    if (!(error_reporting() & $errno)) {
        // Este código de error no está incluido en error_reporting
        return;
    }

    switch ($errno) {
    case E_USER_ERROR:
        $error="<b>Mi ERROR</b> [$errno] $errstr<br />\n";
        $error .="  Error fatal en la línea $errline en el archivo $errfile";
        $error .=", PHP " . PHP_VERSION . " (" . PHP_OS . ")<br />\n";
        $error .="Abortando...<br />\n";
	//error_log($error, 3, "./tmp/my-errors.log");
	$host= $_SERVER["HTTP_HOST"];  
	$url= $host.$_SERVER["REQUEST_URI"]; 
	$ip=$_SERVER['REMOTE_ADDR'];
	$ins="insert into publi_historial_errores (id_usuario,id_fecha,id_hora,id_texto,id_tipo_error,id_donde,id_ip) values ('1','$fecha','$hora','$error','E_USER_ERROR','$url','$ip')";
	$res=$mysqli->query($ins);
	$error=debug_backtrace();
	errores($error);
        exit(1);
        break;

    case E_USER_WARNING:
        $error="<b>Mi WARNING</b> [$errno] $errstr<br />\n";
	//error_log($error, 3, "./tmp/my-errors.log");
	$host= $_SERVER["HTTP_HOST"];  
       	$url= $host.$_SERVER["REQUEST_URI"]; 
	$ip=$_SERVER['REMOTE_ADDR'];
	$ins="insert into publi_historial_errores (id_usuario,id_fecha,id_hora,id_texto,id_tipo_error,id_donde,id_ip) values ('1','$fecha','$hora','$error','E_USER_WARNING','$url','$ip')";
	$res=$mysqli->query($ins);
	$error=debug_backtrace();
	errores($error);
        break;

    case E_USER_NOTICE:
        $error="<b>Mi NOTICE</b> [$errno] $errstr<br />\n";
	//error_log($error, 3, "./tmp/my-errors.log");
	$host= $_SERVER["HTTP_HOST"];  
       	$url= $host.$_SERVER["REQUEST_URI"]; 
	$ip=$_SERVER['REMOTE_ADDR'];
	$ins="insert into publi_historial_errores (id_usuario,id_fecha,id_hora,id_texto,id_tipo_error,id_donde,id_ip) values ('1','$fecha','$hora','$error','E_USER_NOTICE','$url','$ip')";
	$res=$mysqli->query($ins);
	$error=debug_backtrace();
	errores($error);
        break;

    default:
	$error="Tipo de error desconocido: [$errno] $errstr<br />\n";
	//error_log($error, 3, "./tmp/my-errors.log");
	$host= $_SERVER["HTTP_HOST"];  
       	$url= $host.$_SERVER["REQUEST_URI"]; 
	$ip=$_SERVER['REMOTE_ADDR'];
	$ins="insert into publi_historial_errores (id_usuario,id_fecha,id_hora,id_texto,id_tipo_error,id_donde,id_ip) values ('1','$fecha','$hora','$error','$errno','$url','$ip')";
	$res=$mysqli->query($ins);
	$error=debug_backtrace();
	errores($error);
        break;
    }


    /* No ejecutar el gestor de errores interno de PHP */
    return true;
}
function errores($backtrace)
{
	global $mysqli;
	$fecha=date('Y-m-d'); $hora=date('H:i:s');
	$mensaje="";
        foreach ($backtrace as $index => $trace) {
        	$archivo = isset($trace['file']) ? $trace['file'] : '[archivo desconocido]';
	        $linea = isset($trace['line']) ? $trace['line'] : '[línea desconocida]';
        	$funcion = isset($trace['function']) ? $trace['function'] : '[función desconocida]';

	        $mensaje .= "#$index $archivo($linea): $funcion()\n";
    	}
	//error_log($mensaje, 3, "./tmp/my-errors.log");
	if($mensaje!="")
	{
		$host= $_SERVER["HTTP_HOST"];  
        	$url= $host.$_SERVER["REQUEST_URI"]; 
		$ip=$_SERVER['REMOTE_ADDR'];
		$ins="insert into publi_historial_errores (id_usuario,id_fecha,id_hora,id_texto,id_tipo_error,id_donde,id_ip) values ('1','$fecha','$hora','$mensaje','BACKTRACE','$url','$ip')";
		$res=$mysqli->query($ins);
	}
}
function miGestorDeExcepciones($excepcion)
{
	$error=debug_backtrace();
	errores($error);
}

// establecer el gestor de errores definido por el usuario
//$gestor_errores_antiguo = set_error_handler("miGestorDeErrores");

//$backtrace=debug_backtrace(); 
//errores($backtrace);
	/*$fecha=date('Y-m-d'); $hora=date('H:i:s');
        $error="<b>Mi WARNING</b> [$errno] $errstr<br />\n";
	//error_log($error, 3, "./tmp/my-errors.log");
	$host= $_SERVER["HTTP_HOST"];  
       	$url= $host.$_SERVER["REQUEST_URI"]; 
	$ip=$_SERVER['REMOTE_ADDR'];
	$ins="insert into publi_historial_errores (id_usuario,id_fecha,id_hora,id_texto,id_tipo_error,id_donde,id_ip) values ('1','$fecha','$hora','$error','E_USER_WARNING','$url','$ip')";
	echo "ins ".$ins;
	$res=$mysqli->query($ins);
	$error=debug_backtrace();*/
?>
