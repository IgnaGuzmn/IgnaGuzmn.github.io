//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Congratulations!!!"; messageTime="You ran out of time :("; messageError="You lose"; messageErrorG="You lose"; messageAttempts="You ran out of attempts :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","VA==","","","","",""],["","","","","RQ==","","","","",""],["","","","","Rw==","","Qg==","","",""],["SA==","Tw==","Tg==","RA==","VQ==","Ug==","QQ==","Uw==","",""],["","Ug==","","","Qw==","","TA==","","",""],["","Qw==","","UA==","SQ==","Tg==","RQ==","","",""],["","SA==","","","Rw==","","QQ==","","",""],["","SQ==","","","QQ==","","RA==","","",""],["","RA==","","","TA==","","QQ==","","",""],["","","","","UA==","","","","",""],["","","","TQ==","QQ==","Qw==","QQ==","Vw==","",""]];
var x1=[1,4,4,2,5,7];
var y1=[4,6,11,4,1,3];
var x2=[8,7,8,2,5,7];
var y2=[4,6,11,9,11,9];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Country in Central America whose name begins with an H","Honduras national tree","Honduras national bird","Honduras national flower","Capital of Honduras","One of the most tipical and famous dish in Honduras. This dish is made of a tortilla and some toppings inside it."];
var altCW=["","","","","",""];
var colNum=10;
var rowNum=11;
colorText="#000000";colorButton="#FFC400";colorBack="#FFFFFF";colorSele="#82B2FD";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
