<?php
function implota($fecha) // bd2local
{
	if (($fecha == "") || ($fecha == "0000-00-00"))
		return "";
	$vector_fecha = explode("-",$fecha);
	$aux = $vector_fecha[2];
	$vector_fecha[2] = $vector_fecha[0];
	$vector_fecha[0] = $aux;
	return implode("/",$vector_fecha);
}

function explota($fecha) // local2bd
{
	$vector_fecha = explode("/",$fecha);
	$aux = $vector_fecha[2];
	$vector_fecha[2] = $vector_fecha[0];
	$vector_fecha[0] = $aux;
	return implode("-",$vector_fecha);
};

function basef (&$fecha)
{//16-11-2009 -> 2009-11-16
	$CF = preg_split("/-/", "$fecha");
	$fecha = $CF[2]."-".$CF[1]."-".$CF[0];
}

function sust (&$palabra)
{
	$search  = array('á', 'à', 'é', 'è', 'í', 'ó', 'ò', 'ú','ñ','Á','À','É','È','Í','Ó','Ò','Ú','Ñ','ï','Ï','ü','Ü',' ','ç','Ç','\'','\"'); 
	$replace = array('a', 'a', 'e', 'e', 'i', 'o', 'o', 'u','n','A','A','E','E','I','O','O','U','N'.'i','I','u','U','_','c','C','','');
	$palabra=str_replace($search, $replace, $palabra);
}

function sumar_dias($fec_emision,$can_dias)
{
	$fecha = explode("-",$fec_emision);
	$mes = $fecha[1];
	$anio = $fecha[2];
	$dia = $fecha[0];
	$ultimo_dia = date( "d", mktime(0, 0, 0, $mes + 1, 0, $anio) ) ;
	$dias_adelanto = $can_dias;
	$siguiente = $dia + $dias_adelanto;
	if ($ultimo_dia < $siguiente)
	{
		$dia_final = $siguiente - $ultimo_dia;
		$mes++;
		if ($mes == '13')
		{
		$anio++;
		$mes = '01';
		}
		$fecha_final = $dia_final.'-'.$mes.'-'.$anio;         
	}
	else
	{
		$fecha_final = $siguiente .'-'.$mes.'-'.$anio;         
	}
	return($fecha_final);
}

function nombre_mes($mes)
{
	$nommes="";
	if($mes=="1") $nommes="ENERO";
	if($mes=="2") $nommes="FEBRERO";
	if($mes=="3") $nommes="MARZO";
	if($mes=="4") $nommes="ABRIL";
	if($mes=="5") $nommes="MAYO";
	if($mes=="6") $nommes="JUNIO";
	if($mes=="7") $nommes="JULIO";
	if($mes=="8") $nommes="AGOSTO";
	if($mes=="9") $nommes="SEPTIEMBRE";
	if($mes=="10") $nommes="OCTUBRE";
	if($mes=="11") $nommes="NOVIEMBRE";
	if($mes=="12") $nommes="DICIEMBRE";
	return($nommes);
}
function RestarHoras( $hora, $minutos_sumar )
        {
           $minutoAnadir=$minutos_sumar;
           $segundos_horaInicial=strtotime($hora);
           //$segundos_minutoAnadir=-$minutoAnadir*60; //signo + suma , signo - resta
           $segundos_minutoAnadir=-$minutoAnadir; //signo + suma , signo - resta //segundos
           $nuevaHora=date("H:i:s",$segundos_horaInicial+$segundos_minutoAnadir);
           return $nuevaHora;
}

function calcular_password()
{
	$caracteres = '0123456789$#@!?=%-+*.[]{}_,;:<>|abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$caractereslong = strlen($caracteres);
	$clave = '';
	for($i = 0; $i < 8; $i++) {
		$clave .= $caracteres[rand(0, $caractereslong - 1)];
	}
	return $clave;
}

function get_client_ip() {
        $ipaddress = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ipaddress = getenv('HTTP_CLIENT_IP');
        else if(getenv('HTTP_X_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
        else if(getenv('HTTP_X_FORWARDED'))
            $ipaddress = getenv('HTTP_X_FORWARDED');
        else if(getenv('HTTP_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_FORWARDED_FOR');
        else if(getenv('HTTP_FORWARDED'))
           $ipaddress = getenv('HTTP_FORWARDED');
        else if(getenv('REMOTE_ADDR'))
            $ipaddress = getenv('REMOTE_ADDR');
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
}

function is_valid_email($str)
{
	$domain=explode("@",$str);
	if(isset($domain[1]))
	{
		if($domain[1]!="wanadoo.es" and $domain[1]!="infonegocio.com")
		{
			$result = (false !== strpos($str, "@") && false !== strpos($str, "."));
			if($result)
			{
				$result = (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
			}
  
			if ($result)
			{
				if($domain[1]=="gmail.com" or $domain[1]=="yahoo.com" and $domain[1]=="hotmail.es" and $domain[1]=="outlook.es" and $domain[1]=="hotmail.com" and $domain[1]=="yahoo.es" and $domain[1]=="telefonica.net") $result=true;
				else
				{
					$exp = "^[a-z\'0-9]+([._-][a-z\'0-9]+)*@([a-z0-9]+([._-][a-z0-9]+))+$";
					if(preg_match( '/'.$exp.'/i', $str )){
				   		$domain=explode("@",$str);
	   					$result=checkdnsrr($domain[1],"MX");
					}
					else $result=false;
				}
			}
		}
		else $result=false;
	}
	else $result=false;
  
	return $result;
}

function is_yahoo_hotmail($str)
{
	$domain=explode("@",$str);
	if(isset($domain[1]))
	{
		if($domain[1]!="yahoo.com" and $domain[1]!="hotmail.es" and $domain[1]!="outlook.es" and $domain[1]!="hotmail.com" and $domain[1]!="yahoo.es")
			return false;
		else
			return true;
	}
	else 
		return false;
}

 function hexToRgb($hex, $alpha = false) {
                $hex = str_replace('#', '', $hex);
                $length  = strlen($hex);
                $rgb['r'] = hexdec($length == 6 ? substr($hex, 0, 2) : ($length == 3 ? str_repeat(substr($hex, 0, 1), 2) : 0));
                $rgb['g'] = hexdec($length == 6 ? substr($hex, 2, 2) : ($length == 3 ? str_repeat(substr($hex, 1, 1), 2) : 0));
                $rgb['b'] = hexdec($length == 6 ? substr($hex, 4, 2) : ($length == 3 ? str_repeat(substr($hex, 2, 1), 2) : 0));
                if ( $alpha ) {
                      $rgb['a'] = $alpha;
                }
                return $rgb;
        }

/*function traducir($texto,$idioma)
{
	global $mysqli;

	if($idioma==0) $buscar="id_titulo";
	if($idioma==1) $buscar="id_titulo_ca";
	if($idioma==2) $buscar="id_titulo_pt";
	if($idioma==3) $buscar="id_titulo_en";
	if($idioma==5) $buscar="id_titulo_it";
	$sel="select * from news_pantalla where id_titulo='$texto'";
	$res=$mysqli->query($sel);
	$totale=$res->num_rows;
	$trans="";
	if($totale>0)
	{
		$fila=$res->fetch_array();
		$trans=$fila[$buscar];
	}
	if($trans=="") $trans=$texto;
	return $trans;
}*/

function traducir($texto,$idioma)
{
	global $mysqli;

	if($idioma=="es") $buscar="id_titulo";
	else $buscar="id_titulo_".$idioma;
	$sel="select * from news_pantalla where id_titulo='$texto'";
	$hoy=date('Y-m-d H:i:s');
	$texto=addslashes($sel);
	$his="insert info news_historial_error (id_texto,id_profile,id_fecha) value ('$texto','0','$hoy')";
	$resh=$mysqli->query($his);
	//echo $sel;
	$res=$mysqli->query($sel);
	$totale=$res->num_rows;
	$trans="";
	if($totale>0)
	{
		$fila=$res->fetch_array();
		$trans=$fila[$buscar]; //echo "BUSCAR ".$texto." Idioma ".$idioma." ".$buscar;
	}
	if($trans=="") $trans=$texto;
	//echo $trans;
	return $trans;
}
?>
