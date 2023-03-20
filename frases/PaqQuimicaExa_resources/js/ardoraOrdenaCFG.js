var timeAct=100; timeIni=100; timeBon=1;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="¡Feicidades!"; messageTime="Se te acabo el tiempo"; messageError="Mejor suerte para la próxima"; messageErrorG="Mejor suerte para la próxima"; messageAttempts="Se te acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF8000";borderError="#FF0000"; borderAttempts="#FF8000";
var wordsGame="UGFxUXVpbWljYUV4YQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["w4F0b21vcyBkZSBoaWRyw7NnZW5v","Q2xvcnVybyBkZSBzb2Rpbw==","Sm9zZXBoIEpvaG4gVGhvbXNvbg==","RXJ3aW4gUnVkb2xmIFNjaHLDtmRpbmdlcg==","Qm9zw7NuIGRlIEhpZ2dz"];imaW=["hidrogeno.jpg","","","",""];queW=["El es primer átomo de la tabla periodica, tiene un número atómico de 1","Átomos que componen la sal de mesa","Fue un científico británico, descubridor del electrón","Fue un físico y filósofo austríaco, creador de la ecuación de Schrodinger y precursor de la idea del modelo atómico actual","Particula primordial que se encarga de darle masa a todas las demas partículas que interactuen con su campo."];altW=["","","","",""];c=[19,16,19,24,14];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="PaqQuimicaExa_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
