var haslo = "front end developer";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var haslo1 = "";
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i=0; i<dlugosc; i++)
{
	if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1+ "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery ="AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";

function start()
{
	var tresc_diva ="";
	for(i=0;i<35;i++)
	{
		var element = "lit"+i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if (i % 7 == 6) tresc_diva = tresc_diva + '<div style="clear:both"></div>';
	}
	
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	
		wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce,znak)
{
	if(miejsce> this.lenght - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var trafiona = false;
	
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	var element = "lit"+nr;
	if(trafiona == true)
	{
		yes.play();
		document.getElementById(element).style.background="#003330"; 
		document.getElementById(element).style.color="#00C000"; 
		document.getElementById(element).style.border="3px solid #00C000"; 
		document.getElementById(element).style.cursor="default"; 
		wypisz_haslo();
	}
	else
	{
		no.play();
		document.getElementById(element).style.background="#333330"; 
		document.getElementById(element).style.color="#C01000"; 
		document.getElementById(element).style.border="3px solid #C01000"; 
		document.getElementById(element).style.cursor="default"; 
		document.getElementById(element).setAttribute("onclick",";");
		ile_skuch++
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	
	//wygrana
	if(haslo==haslo1)
		document.getElementById("alfabet").innerHTML = "Tak Jest! Podano prawidłowe hasło: "+haslo+
	'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	//przegrana
	if (ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

	wypisz_haslo();
}


