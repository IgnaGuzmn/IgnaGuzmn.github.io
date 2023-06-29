//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="PLAY";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#458D03"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FCFFFB";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Georgia, Serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=3; messageOk="LO LOGRASTE!!"; messageTime=""; messageError="owww......"; messageErrorG="owww......"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#85E61A"; borderTime="#FF0000";borderError="#85E61A"; borderAttempts="#FF0000";
var wordsGame="anVlZ29fZmVyaWE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Rk9UT1NJTlRFU0lTIA==","RVZPTFVDScOTTiA=","TVVUQUNJw5NO","Q8OJTFVMQQ==","RU5aSU1BUyA=","UEFMRU9OVE9MT0fDjUE=","Q0lFTkNJQQ==","TUlUT0NPTkRSSUEg","TlVDTEVPTE8=","T1JHQU5FTE9TIA=="];imaW=["0_images.jpg","0_Evolucio__n_es_0.jpg","0_Mutation.png","0_descarga__1_.jpg","0_descarga__2_.jpg","0_paleontologia-e1551662411437.jpg","0_descarga__3_.jpg","0_Animal_mitochondrion_diagram_es.svg.png","0_descarga__4_.jpg","0_ilustracion-simple-de-una-mitocondria-en-la-celula-2hb3khm.jpg"];queW=["es algo escencial para las plantas","proceso por el cual los organismos vivos cambian con el tiempo","cambio notable fisicamente gracias a cambio del ADN","unidad más pequeña que puede vivir por sí sola.","proteínas complejas que producen un cambio químico específico"," ciencia natural que estudia e interpreta el pasado de la vida sobre la Tierra a través de los fósiles","conjunto de conocimientos sistemáticos comprobables que estudian, explican y predicen los fenómenos sociales, artificiales y naturales.​","orgánulos celulares que generan la mayor parte de la energía química","Área en el interior del núcleo de una célula que se compone de ARN y proteínas"," es una forma de compartimentar todas las funciones que se cumplen dentro de una célula."];var wordsL=[12,9,8,6,7,13,7,11,8,9];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="juego_feria_resources/media/"; textBNext="";
colorText="#2B2B2B";colorButton="#858B00";colorBack="#FFFFFF";colorSele="#F8F5D7";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
