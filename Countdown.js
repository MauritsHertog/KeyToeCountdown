// countdown timer t/m 3 september 2018 


// Maak nog wat dingen global zodat dingen zoals berekenentoonuren vars zodat er geen side-effects meer hebben zoals het setten van een html element (zie regel 46).
// gebruik ue4 blur om een achtergrond te maken voor de webpage. (maybe).
// Check o

var huidigeDag;
var huidigUur;
var huidigeSeconde;
var huidigeMinuut;
var aantalUren;

var startDatum;
var eindDatum;
var tijdVerschil;
var dagenVerschil;

var minutenGezet;
var urenGezet;

var eindTijd;

	
function startTimer()
{
	initialiseerTimer();
	setInterval(checkSecondes, 1000);
}

function initialiseerTimer()
{
	zetWaardes();
	
	checkDagen();
	checkUren();
	checkMinuten();
	checkSecondes();
}

function zetWaardes()
{
	// Pakt de huidige dag, uur, seconde en minuut
	huidigeDag = new Date();
	huidigUur = huidigeDag.getHours();
	huidigeSeconde = 60 - huidigeDag.getSeconds();
	huidigeMinuut = 60 - huidigeDag.getMinutes();
	
	// Verschil in dagen berekenen. Date.parse is in milliseconde.
	startDatum = Date.parse(huidigeDag);
	eindDatum = Date.parse("2018-09-03 09:00:00");
	tijdVerschil = eindDatum - startDatum;
	
	// tijdverschil in milliseconde omzetten naar dagen.
	dagenVerschil = Math.ceil(tijdVerschil / (1000 * 60 * 60 * 24));
	
	minutenGezet = false;
	eindTijd = 0;

}

function checkDagen()
{
	document.getElementById("Day").innerHTML = dagenVerschil.toString();
}

function checkUren()
{
	var eindTijd = 9;
	if(huidigUur > eindTijd)
	{
		aantalUren = 24-(huidigUur-eindTijd);
		dagenVerschil--;
		checkDagen();
	}
	else
	{
		aantalUren = endTime - n;
	}
	
	if(!urenGezet)
	{
		aantalUren--;
		urenGezet = true;
	}
	
	document.getElementById("Hours").innerHTML = aantalUren.toString();
}

function checkMinuten()
{
	if(huidigeMinuut < eindTijd)
	{
		aantalUren--
		checkUren();
		huidigeMinuut = 59;
	}
	
	if(!minutenGezet)
	{
		huidigeMinuut--;
		minutenGezet = true;
	}

	document.getElementById("Minuten").innerHTML = huidigeMinuut.toString();
}


function checkSecondes()
{
	if(huidigeSeconde <= 0)
	{
		huidigeMinuut--;
		checkMinuten();
		huidigeSeconde = 59;
	}
	else 
	{
		huidigeSeconde--;
	}

	document.getElementById("Secondes").innerHTML = huidigeSeconde.toString();
}

