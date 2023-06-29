//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡¡Excelente!!"; messageTime="Se te acabó el tiempo :("; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="Te quedaste sin intentos :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF8000";borderError="#FF0000"; borderAttempts="#FF8000";
var wordsGame="T3JkZW5CaW9sbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["OGJhZWE3ZDgtMGIzZC00MzBlLTllNDEtZjEwYTBlMjE2YjE2LmpwZw==","YWVjYjRjZjItNDllMi00NTY1LTgwM2QtZjdjNzVkNTkwZjU2LmpwZw==","YmE0MzA5YzktMjg0ZS00ZDlhLWJmN2QtYjIxYjcwZjFkMmQxLmpwZw==","MWEyYTU4MDMtNjE4OS00NmQyLWE5MjItYWRlYTU5YWVkZmM3LmpwZw==","NzgyMjYzMDMtYWJjNy00NmQ4LWI1N2QtMjkwYWQ2Y2U5NDk4LmpwZw==","NDk0NzYzNDItNzkwYy00NzU0LTg0OTQtNzhjMjUzMGI1NTNhLmpwZw=="];
var alts=["","","","","",""];
var actMaxWidth="700"; actMaxHeight="500";indexG=0;profG=0;dirMedia="OrdenBiolo_resources/media/";
var wordsG=[];aW=[];
colorText="#2B2B2B";colorButton="#858B00";colorBack="#FFFFFF";colorSele="#F8F5D7";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
