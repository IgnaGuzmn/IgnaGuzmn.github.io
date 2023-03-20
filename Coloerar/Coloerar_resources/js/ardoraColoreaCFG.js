//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=10;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="¡Felicidades!"; messageTime="Se te acabó el tiempo"; messageError="Intenalo otra vez"; messageErrorG="Intenalo otra vez"; messageAttempts="Se te acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF8000";borderError="#FF0000"; borderAttempts="#FF8000";
var wordsGame="Q29sb2VyYXI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#FFFF00","#FF80FF","#FF80C0","#FF80C0","#FFFF00","#FF80C0","#804000","#804000","#804000","#804000","#FF0000","#F47A00","#F47A00","#F47A00","#F47A00","#F47A00","#F47A00","#F47A00","#00FFFF","#00FFFF","#00FFFF","#FF0080","#FF0080"];
var x=["304","239","375","351","292","313","289","348","389","239","178","46","93","175","153","94","59","95","190","137","229","282","343"];
var y=["122","123","160","211","167","56","26","31","89","69","178","155","148","120","68","58","79","83","220","226","208","54","64"];
var t=["","","","","","","","","","","","","","","","","","","","","","",""];
var cM=["#FFFF00","#FF80FF","#FF80C0","#FF80C0","#FF80C0","#804000","#FF0000","#F47A00","#00FFFF","#FF0080"];
var tM=["Camisa","Brazo derecho","Brazo izquierdo","Pie izquierdo","Cara","Pelo","Carro","Pelota","Ventanas","Pecas"];
var indexColor=0;
