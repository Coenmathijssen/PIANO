/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/




/* ------- Bij deze code koppel ik ten eerste de id van de knop en het tekstje boven de piano aan een variabele. Vervolgens heb ik een array met een aantal willeukeurige namen van componisten. Wanneer de functie 'componist' wordt aangeroepen - door het klikken van de knop -, dan pakt mijn JS een willekeurige naam uit mijn array binnen de variabele 'verschillendeComponisten'. Mathrandom pakt een getal tussen 0 en 1 - nooit precies 0 en nooit precies 1 en Math.floor rond het naar beneden af - en doet dit * het aantal namen binnen mijn lijst. Welk getal daar uit komt, wordt de gekozen naam uit mijn array. Deze wordt geplaatst binnen het tekstje en de button.   ---------- */

var knop = document.querySelector("#knop");
var naamOnder = document.querySelector("#naamOnder");


var verschillendeComponisten = ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Richard Wagner', 'Franz Schubert', 'Frederic Chopin', 'Giuseppe Verdi', 'Franz Liszt', 'Robert Schumann', 'Johannes Brahms', 'Johann Sebastian Bach', 'Joseph Haydn', 'Peter Ilyich Tchaikovsky', 'George Frideric Handel', 'Igor Stravinsky', 'Felix Mendelssohn', 'Claude Debussy', 'Antonin Dvorak', 'Gustav Mahler', 'Antonio Vivaldi', 'Richard Strauss', 'Serge Prokofiev', 'Dmitri Shostakovich', 'Béla Bartók', 'Maurice Ravel', 'Ralph Vaughan Williams', 'Modest Mussorgsky', 'Giacomo Puccini', 'Henry Purcell', 'Gioacchino Rossini', 'Edward Elgar'];

function componist() {
    var naam = verschillendeComponisten[Math.floor(Math.random() * verschillendeComponisten.length)];
    knop.textContent = naam;
    naamOnder.textContent = 'Bespeel de piano zoals alleen ' + naam + ' dat kan.';
}

knop.addEventListener('click', componist, false);







/* ------ Eerst koppel ik de id's van de knop en de p waar alle namen moeten verschijnen aan een variabele. Vervolgens declareer ik de functie 'displayNamen'. Ik koppel de variabele 'tekst' aan de parameter 'persoon'. Vevolgens zeg ik dat dat de personen - worden de componisten namen - telkens bij de p 'namen' bijgeschreven moet worden. ------ */

var knop2 = document.querySelector("#knop2");
var namen = document.querySelector("#namen");


function displayNamen(persoon) {
    var tekst = persoon;
    namen.textContent += tekst;

    if (persoon == verschillendeComponisten[29]) { // De laatste naam in de array krijgt een punt erachter.
        namen.textContent = namen.textContent + '.';
    }

    else { // Alle andere namen worden gevolgd met een comma en een spatie.
        namen.textContent = namen.textContent + ', ';
    }
}

/* ------ In de function namen laten zien zorg ik ervoor dat wanneer er op de knop 'BEKIJK DE VOLLEDIGE LIJST VAN COMPONISTEN' wordt gedrukt, dat het verdwijnt. Vervolgens gaat JS net zo lang door een for loop heen als dat er namen zijn van de 'verschillendeComponisten' array. Elke keer dat JS door de loop gaat, leest het de functie 'displayNamen' en wordt er dus een naam in de HTML gezet. ------ */

function namenLatenZien() {
    knop2.style.display = "none"; // Knop verdwijnt wanneer de functie wordt gelezen.
    for( var i=0; i < verschillendeComponisten.length; i++){
        displayNamen(verschillendeComponisten[i]);
        }
}

knop2.addEventListener('click',namenLatenZien, false);










/* ------- Deze function 'witIndruk' wordt gelezen wanneer er een willekeurige toets wordt ingedrukt. Bij deze function gaat JS lezen welke toets wordt ingedrukt met behulp van keycodes. Als een bepaalde toets wordt ingedrukt - x krijgt daarbij een bepaalde waarde van de keycode - , dan voert JS het stuk code uit wat hoort bij die bepaalde toets. Binnen deze code wordt het juiste HTML geselecteerd en wordt er een class aan toegevoegd. Deze class zorgt voor het CSS indruk effect. Bovendien wordt het juiste audio-file binnen de HTML afgespeeld. ---------- */

function witIndruk(event) {
    var x = event.keyCode; // CREDIT: https://www.w3schools.com/jsref/event_key_keycode.asp

    if (x == 65) { // Bij witte toets A
        var wit1 = document.querySelector("#wit1");
        wit1.classList.add("witActief"); // Hier wordt de class 'witActief toegevoegd met het css effect.
        document.getElementById('audioWit1').play();  // Audio in de HTML wordt afgespeeld.
        document.getElementById('audioWit1').currentTime = 0; // De audio mag opnieuw gespeeld worden wanneer er wordt geklikt. De audio hoeft met deze regel dus niet helemaal afgespeeld te worden.

    }

    else if (x == 87) { // Bij zwarte toets W
        var zwart1 = document.querySelector("#zwart1");
        zwart1.classList.add("witActief");
        document.getElementById('audioZwart1').play();
        document.getElementById('audioZwart1').currentTime = 0;
    }

    else if (x == 83) { // Bij witte toets S
        var wit2 = document.querySelector("#wit2");
        wit2.classList.add("witActief");
        document.getElementById('audioWit2').play();
        document.getElementById('audioWit2').currentTime = 0;
    }

    else if (x == 69) { // Bij zwarte toets E
        var zwart2 = document.querySelector("#zwart2");
        zwart2.classList.add("witActief");
        document.getElementById('audioZwart2').play();
        document.getElementById('audioZwart2').currentTime = 0;
    }

    else if (x == 68) { // Bij witte toets D
        var wit3 = document.querySelector("#wit3");
        wit3.classList.add("witActief");
        document.getElementById('audioWit3').play();
        document.getElementById('audioWit3').currentTime = 0;
    }

    else if (x == 70) { // Bij witte toets F
        var wit4 = document.querySelector("#wit4");
        wit4.classList.add("witActief");
        document.getElementById('audioWit4').play();
        document.getElementById('audioWit4').currentTime = 0;
    }

    else if (x == 84) { // Bij zwarte toets T
        var zwart3 = document.querySelector("#zwart3");
        zwart3.classList.add("witActief");
        document.getElementById('audioZwart3').play();
        document.getElementById('audioZwart3').currentTime = 0;
    }

    else if (x == 71) { // Bij witte toets G
        var wit5 = document.querySelector("#wit5");
        wit5.classList.add("witActief");
        document.getElementById('audioWit5').play();
        document.getElementById('audioWit5').currentTime = 0;
    }

    else if (x == 89) { // Bij zwarte toets Y
        var zwart4 = document.querySelector("#zwart4");
        zwart4.classList.add("witActief");
        document.getElementById('audioZwart4').play();
        document.getElementById('audioZwart4').currentTime = 0;
    }

    else if (x == 72) { // Bij witte toets H
        var wit6 = document.querySelector("#wit6");
        wit6.classList.add("witActief");
        document.getElementById('audioWit6').play();
        document.getElementById('audioWit6').currentTime = 0;
    }

    else if (x == 85) { // Bij zwarte toets U
        var zwart5 = document.querySelector("#zwart5");
        zwart5.classList.add("witActief");
        document.getElementById('audioZwart5').play();
        document.getElementById('audioZwart5').currentTime = 0;
    }

    else if (x == 74) { // Bij witte toetsJ
        var wit7 = document.querySelector("#wit7");
        wit7.classList.add("witActief");
        document.getElementById('audioWit7').play();
        document.getElementById('audioWit7').currentTime = 0;
    }


}



/* ------- Wanneer een willekeurige toets wordt losgelaten, wordt de function 'WitLoslaat' gelezen. Wanneer de keycode van de losgelaten toets overeenkomt met de geschreven x-waarde, dan wordt dat stukje code uitgevoerd. Hierbij haalt JS de class 'witActief' weg van het opgehaalde HTML-element. Waardoor het indruk effect weg gaat. ---------- */

function witLoslaat(event) {
    var x = event.keyCode;

    if (x == 65) { // Bij witte toets A
        var wit1 = document.querySelector("#wit1");
        wit1.classList.remove("witActief"); // Class met CSS effect wordt weggehaald.
    }

    else if (x == 87) { // Bij zwarte toets W
        var zwart1 = document.querySelector("#zwart1");
        zwart1.classList.remove("witActief");
    }

    else if (x == 83) { // Bij witte toets S
        var wit2 = document.querySelector("#wit2");
        wit2.classList.remove("witActief");
    }

    else if (x == 69) { // Bij zwarte toets E
        var zwart2 = document.querySelector("#zwart2");
        zwart2.classList.remove("witActief");
    }

    else if (x == 68) { // Bij witte toets D
        var wit3 = document.querySelector("#wit3");
        wit3.classList.remove("witActief");
    }

    else if (x == 70) { // Bij witte toets F
        var wit4 = document.querySelector("#wit4");
        wit4.classList.remove("witActief");
    }

    else if (x == 84) { // Bij zwarte toets T
        var zwart3 = document.querySelector("#zwart3");
        zwart3.classList.remove("witActief");
    }

    else if (x == 71) { // Bij witte toets G
        var wit5 = document.querySelector("#wit5");
        wit5.classList.remove("witActief");
    }

    else if (x == 89) { // Bij zwarte toets Y
        var zwart4 = document.querySelector("#zwart4");
        zwart4.classList.remove("witActief");
    }

    else if (x == 72) { // Bij witte toets H
        var wit6 = document.querySelector("#wit6");
        wit6.classList.remove("witActief");
    }

    else if (x == 85) { // Bij zwarte toets U
        var zwart5 = document.querySelector("#zwart5");
        zwart5.classList.remove("witActief");
    }

    else if (x == 74) { // Bij witte toets J
        var wit7 = document.querySelector("#wit7");
        wit7.classList.remove("witActief");
    }


}


/* ------- Hierbij wordt de function 'witIndruk actief wanneer er een willekeurige toets wordt ingedrukt. 'witLoslaat wordt actief wanneer een toets wordt losgelaten. --------- */

document.addEventListener('keydown', witIndruk, false);
document.addEventListener('keyup', witLoslaat, false);









/* ------- In deze code maak ik per toets een aparte function aan met de juiste audio file. Als er geklikt wordt op een van de elementen, dan leest JS de bijbehorende functie uit via een event. Hierdoor wordt het juiste audio fragment bij de toets afgespeeld.  --------- */

function FunctionKlikWit1() { // Bij witte toets A
    document.getElementById('audioWit1').play();
    document.getElementById('audioWit1').currentTime = 0;
}
var klikWit1 = document.querySelector("#wit1");
klikWit1.addEventListener('click', FunctionKlikWit1, false);



function FunctionKlikZwart1() { // Bij zwarte toets W
    document.getElementById('audioZwart1').play();
    document.getElementById('audioZwart1').currentTime = 0;
}
var klikZwart1 = document.querySelector("#zwart1");
klikZwart1.addEventListener('click', FunctionKlikZwart1, false);



function FunctionKlikWit2() { // Bij witte toets S
    document.getElementById('audioWit2').play();
    document.getElementById('audioWit2').currentTime = 0;
}
var klikWit2 = document.querySelector("#wit2");
klikWit2.addEventListener('click', FunctionKlikWit2, false);



function FunctionKlikZwart2() { // Bij zwarte toets E
    document.getElementById('audioZwart2').play();
    document.getElementById('audioZwart2').currentTime = 0;
}
var klikZwart2 = document.querySelector("#zwart2");
klikZwart2.addEventListener('click', FunctionKlikZwart2, false);



function FunctionKlikWit3() { // Bij witte toets D
    document.getElementById('audioWit3').play();
    document.getElementById('audioWit3').currentTime = 0;
}
var klikWit3 = document.querySelector("#wit3");
klikWit3.addEventListener('click', FunctionKlikWit3, false);



function FunctionKlikWit4() { // Bij witte toets F
    document.getElementById('audioWit4').play();
    document.getElementById('audioWit4').currentTime = 0;
}
var klikWit4 = document.querySelector("#wit4");
klikWit4.addEventListener('click', FunctionKlikWit4, false);



function FunctionKlikZwart3() { // Bij zwarte toets T
    document.getElementById('audioZwart3').play();
    document.getElementById('audioZwart3').currentTime = 0;
}
var klikZwart3 = document.querySelector("#zwart3");
klikZwart3.addEventListener('click', FunctionKlikZwart3, false);



function FunctionKlikWit5() { // Bij witte toets G
    document.getElementById('audioWit5').play();
    document.getElementById('audioWit5').currentTime = 0;
}
var klikWit5 = document.querySelector("#wit5");
klikWit5.addEventListener('click', FunctionKlikWit5, false);



function FunctionKlikZwart4() { // Bij zwarte toets Y
    document.getElementById('audioZwart4').play();
    document.getElementById('audioZwart4').currentTime = 0;
}
var klikZwart4 = document.querySelector("#zwart4");
klikZwart4.addEventListener('click', FunctionKlikZwart4, false);



function FunctionKlikWit6() { // Bij witte toets H
    document.getElementById('audioWit6').play();
    document.getElementById('audioWit6').currentTime = 0;
}
var klikWit6 = document.querySelector("#wit6");
klikWit6.addEventListener('click', FunctionKlikWit6, false);



function FunctionKlikZwart5() { // Bij zwarte toets U
    document.getElementById('audioZwart5').play();
    document.getElementById('audioZwart5').currentTime = 0;
}
var klikZwart5 = document.querySelector("#zwart5");
klikZwart5.addEventListener('click', FunctionKlikZwart5, false);



function FunctionKlikWit7() { // Bij witte toets J
    document.getElementById('audioWit7').play();
    document.getElementById('audioWit7').currentTime = 0;
}
var klikWit7 = document.querySelector("#wit7");
klikWit7.addEventListener('click', FunctionKlikWit7, false);
