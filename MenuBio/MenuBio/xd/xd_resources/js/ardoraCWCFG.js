//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#7EFB7B"; colorButton="#004000"; colorText="#000000"; colorSele="#36F52C";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Bien Hecho!"; messageTime=""; messageError="Muy Mal"; messageErrorG="Muy Mal"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="eGQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["QQ==","VA==","UA==","Og==","Og==","TQ==","Og==","Og==","Og==","Og==","Qw=="],["Og==","Og==","Og==","Og==","Og==","SQ==","Og==","Qw==","Og==","Og==","SQ=="],["Og==","Tg==","Og==","Og==","Og==","VA==","Og==","Ug==","Og==","Og==","VA=="],["Tg==","VQ==","Qw==","TA==","RQ==","Tw==","Og==","Tw==","Og==","Og==","Tw=="],["Og==","Qw==","Og==","Og==","Og==","Qw==","Og==","TQ==","Og==","Og==","UA=="],["Rw==","TA==","Og==","Og==","Og==","Tw==","Og==","Tw==","Og==","Og==","TA=="],["Tw==","RQ==","Og==","QQ==","RA==","Tg==","Og==","Uw==","Og==","Og==","QQ=="],["TA==","Tw==","Og==","RA==","Og==","RA==","Og==","Tw==","Og==","Og==","Uw=="],["Rw==","Og==","Og==","UA==","Og==","Ug==","Og==","TQ==","Og==","Og==","TQ=="],["SQ==","Og==","Og==","Og==","Og==","SQ==","Og==","QQ==","Og==","Og==","QQ=="],["Og==","Og==","Tw==","Ug==","Rw==","QQ==","Tg==","RQ==","TA==","Tw==","Og=="]];
var x1=[1,6,11,8,2,1,1,1,4,1,3,1,4];
var y1=[1,1,1,2,3,4,6,7,7,8,11,6,7];
var x2=[3,6,11,8,2,6,2,2,6,2,10,1,4];
var y2=[1,11,10,11,8,4,6,7,7,8,11,10,9];
var imaCW=["xd_resources/media/ATP.png","xd_resources/media/descarga__5_.jpg","xd_resources/media/celula-estructura-min-e1534186682765-800x400.jpg","xd_resources/media/descarga__6_.jpg","xd_resources/media/nucleo-celular1-e1535469164136.jpg","xd_resources/media/nucleo-celular1-e1535469164136.jpg","","","xd_resources/media/descarga__7_.jpg","","xd_resources/media/descarga__8_.jpg","xd_resources/media/descarga__9_.jpg","xd_resources/media/adenosina-difosfato-adp-molecula-juega-papel-esencial-en-el-uso-y-almacenamiento-de-energia-en-la-celula-formula-esqueletica-k76fjm.jpg"];
var audioCW=["","","","","","","","","","","","",""];
var defCW=["Molécula portadora de la energía primaria para todas las formas de vida","Orgánulos celulares que generan la mayor parte de la energía química necesaria para activar las reacciones bioquímicas de la célula.","Parte de la célula que rodea el núcleo y que está limitada por la membrana exterior.","estructuras que se encuentran en el centro (núcleo) de las células que transportan fragmentos largos de ADN","la estructura de la célula que contiene los cromosomas","la estructura de la célula que contiene los cromosomas.","","","es un ácido nucleico que contiene las instrucciones genéticas usadas en el desarrollo y funcionamiento de todos los organismos vivos​ y algunos virus","","estructura específica dentro de una célula","es un orgánulo celular que ayuda en la fabricación y empaquetamiento de las proteínas","Es un regulador de la actividad de numerosas enzimas implicadas en el metabolismo energético."];
var altCW=["","","","","","","","","","","","",""];
var colNum=11;
var rowNum=11;
colorText="#2B2B2B";colorButton="#858B00";colorBack="#FFFFFF";colorSele="#F8F5D7";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
