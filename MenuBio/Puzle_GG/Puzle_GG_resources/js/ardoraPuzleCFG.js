//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=16; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
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
var fActi="";
var fEnun="'Lucida Console', Monaco, monospace";
var timeOnMessage=5; messageOk="Eres el ganador!!!"; messageTime="EL tiempo llego a su fin"; messageError="Ahí no es"; messageAttempts="Se te acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="Puzle_GG_resources/media/original.jpg";
var board=[["Puzle_GG_resources/media/cGllY2UxXzE=.jpg","Puzle_GG_resources/media/cGllY2UyXzE=.jpg","Puzle_GG_resources/media/cGllY2UzXzE=.jpg","Puzle_GG_resources/media/cGllY2U0XzE=.jpg"],["Puzle_GG_resources/media/cGllY2UxXzI=.jpg","Puzle_GG_resources/media/cGllY2UyXzI=.jpg","Puzle_GG_resources/media/cGllY2UzXzI=.jpg","Puzle_GG_resources/media/cGllY2U0XzI=.jpg"],["Puzle_GG_resources/media/cGllY2UxXzM=.jpg","Puzle_GG_resources/media/cGllY2UyXzM=.jpg","Puzle_GG_resources/media/cGllY2UzXzM=.jpg","Puzle_GG_resources/media/cGllY2U0XzM=.jpg"],["Puzle_GG_resources/media/cGllY2UxXzQ=.jpg","Puzle_GG_resources/media/cGllY2UyXzQ=.jpg","Puzle_GG_resources/media/cGllY2UzXzQ=.jpg","Puzle_GG_resources/media/cGllY2U0XzQ=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UHV6bGVfR0c="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#2B2B2B";colorButton="#858B00";colorBack="#FFFFFF";colorSele="#F8F5D7";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
