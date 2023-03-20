//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=10;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades!"; messageTime="Se te acabo el tiempo"; messageError="Intentalo otra vez"; messageErrorG="Intentalo otra vez"; messageAttempts="Se te acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF8000";borderError="#FF0000"; borderAttempts="#FF8000";
var wordsGame="UGFycmFmb3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="Parrafos_resources/media/";
var indexG=0;
var words1G=["VW4gZWxlY3Ryw7NuIGVzIHVuIHRpcG8gZGUgcGFydMOtY3VsYSBzdWJhdMOzbWljYQ==","cXVlIHByZXNlbnRhIGNhcmdhIGVsw6ljdHJpY2EgbmVnYXRpdmEgeQ==","cXVlIG9yYml0YSBlbCBuw7pjbGVvIGF0w7NtaWNvIChjb21wdWVzdG8gcG9yIHByb3RvbmVzIHkgbmV1dHJvbmVzKSw=","cXVlIHByZXNlbnRhIHVuYSBjYXJnYSBlbMOpY3RyaWNhIHBvc2l0aXZhLg=="];
var words2G=["RWwgcHJvdMOzbiBlcyB1biB0aXBvIGRlIHBhcnTDrWN1bGEgc3ViYXTDs21pY2Es","ZXMgZGVjaXIsIHVuYSBkZSBsYXMgcGFydMOtY3VsYXMgbcOtbmltYXMgcXVlIGNvbnN0aXR1eWVuIGFsIMOhdG9tby4=","UGVydGVuZWNlIGEgbGEgZmFtaWxpYSBkZSBsb3MgZmVybWlvbmVzIHk=","ZXN0w6EgZG90YWRvIGRlIGNhcmdhIGVsw6ljdHJpY2EgcG9zaXRpdmEu"];
var words3G=["VW4gbmV1dHLDs24gZXMgdW4gdGlwbyBkZSBwYXJ0w61jdWxhIHN1YmF0w7NtaWNh","cHJlc2VudGUgZW4gZWwgbsO6Y2xlbyBkZSBhbGd1bm9zIMOhdG9tb3MgeSBkb3RhZGEgZGUgdW5hIGNhcmdhIGVsw6ljdHJpY2EgbmV1dHJhLg==","VG9kb3MgbG9zIMOhdG9tb3MgZGVsIHVuaXZlcnNvIHNlIGNvbXBvbmVuIGRl","bmV1dHJvbmVzLCBwcm90b25lcyAoZGUgY2FyZ2EgZWzDqWN0cmljYSBwb3NpdGl2YSkgeSBlbGVjdHJvbmVzIChkZSBjYXJnYSBlbMOpY3RyaWNhIG5lZ2F0aXZhKS4="];
var c1=[46,39,66,42];
var c2=[45,65,41,40];
var c3=[45,79,44,93];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
