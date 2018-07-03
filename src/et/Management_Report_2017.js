/*globals window, document, setTimeout*/

(function () {
  "use strict";
  const head = document.head;
  const body = document.body;
  const $ = (selector) => body.querySelector(selector);
  const text = `

<h1>Tegevusaruanne 2017</h1>
<p>
Reach-U on oma pea 30 tegevusaasta jooksul arenenud kaartide tegijast geoinfosüsteemide loojaks ja sealt edasi tarkvaraettevõtteks. Rõhutamaks muutuste teed asendasime sellel aastal tegevuskaardid toimiva Javascripti koodiga (https://github.com/reach-u/management-report-2017). <!-- Tarkvarakaugete lugejate jaoks on tegevusaruanne kättesaadav ka aadressil http://www.reach-u.com/management-report-2017.html -->
</p>
<p>
Reach-U põhilised tegevusvaldkonnad on:
</p>
<ul>
  <li>a. telekomiettevõtete aitamine olemasolevatele klientidele parema teenuse pakkumisel ning uute ärisuundade leidmisel</li>
  <li>b. riigi- ja linnajuhtimise lihtsustamine ning läbipaistvamaks muutmine</li>
</ul>
<p>
Maailmamajanduse positiivses toetuses oli aasta väga hea. Müügitulu kasvas üle 50%, kõige rohkem telekomisektoris ja väljaspool Euroopa Liitu. Piirkonniti jaotus käive: 1/3 Eesti, 1/3 muu Euroopa Liit, 1/3 muu maailm. 
</p>
<p>
2017. aastal oli Reach-U tootearenduse maht 400 000 EUR, ehk 12% käibest. Kõik tootearenduse ja turuhõive investeeringud kajastame perioodi kuludena.
</p>
<p>
2018. aastal on peamised investeeringuvaldkonnad:
</p>
<ul>
  <li>a. telekomisektori andmete väärtustamine ning visualiseerimine</li>
  <li>b. teede infrastruktuuri automaatkaardistamise ning 3D mudelite loomine</li>
  <li>c. Aafrika ja Aasia turgudele sisenemine</li>
</ul>
<p>
Kuna 37% Reach-U käibest laekus välisvaluutas, mõjutas valuutakursside kõikumine finantstulemust märgatavalt: 2017. aastal oli kahju kursimuudatustest 33 981 EUR.
</p>


<!-- Suur tänu vahva aasta eest meie headele klientidele ja partneritele! -->
<p class="slidetext friends">
 <span>Kliendid ja partnerid:</span> <span> Aare(EE), Abdulwahab(KE), Alan(IE), Aleksandr(UA), Amar(CA), Andreas(SE), Andres(EE), Andres(EE), Andres(EE), Ankit(CA), Auli(FI), Ave(EE), Baizhang(JP), Brian(IE), Carl-Johan(SE), Chinmaya(CA), Chris(JP), Danilo(EE), Dermot(IE), Doris(EE), Eamonn(JP), Edison(JP), Eglit(EE), Eleanor(LC), Elina(EE), Eng. Keno(KE), Enn(EE), Erki(EE), Erkki(EE), Evelin(EE), Evely(EE), Felipe(CL), Fiorenzo(CA), Franciscoabel(MX), Gerttu(EE), Hamza(CA), Hannes(EE), Haseeb(SA), Husnu(TR), Imran(AE), Indrek(EE), Indrek(EE), Indrek(EE), Jaan(EE), Jaanus(EE), Jaanus(EE), Jan(CZ), Jan(CZ), Jana(EE), Janno(EE), Janno(EE), Jefferson(CA), Jeroen(SE), Jia(SE), Jihad(AE), Jindrich(CZ), Johan(BE), John(IE), Joosep(EE), Josh(CA), Jürgen(EE), Juri(EE), Jüri(EE), Jussi(FI), Kaiko(EE), Kaisi(EE), Kätlin(EE), Konsta(FI), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristo(EE), Lauri(EE), Lauri(EE), Liia(EE), Liilia(EE), Liina(EE), Luis(MX), Maarja(EE), Maarja(EE), Maie(EE), Mailis(EE), Manke(SE), Marge(EE), Margus(EE), Marius(EE), Mark (JP), Markku(FI), Martin(EE), Martin(EE), Martina(EE), Matis(EE), Mats(EE), Matt(CA), Mattias(SE), Mehis(EE), Meshack(KE), Michael(IE), Michael(SE), Mihkel(EE), Mihkel(EE), Mikael(FI), Mikk(EE), Mikk(EE), Momoko(JP), Moonika(EE), Mukesh(CA), Naeem(SA), Nauby(CA), Olena(CA), Omar(CA), Õnne(EE), Ove(EE), Patrik(SE), Petr(CZ), Priit(EE), Priit(EE), Priit(EE), Priit(EE), Rado(SK), Rain(EE), Rain(EE), Rando-Juku(EE), Rein(EE), Richard(CA), Robin(KE), Roland(FI), Roman(EE), Romet(EE), Rustam(UA), Sahar(CA), Svetlana(EE), Swagat(JP), Tambet(EE), Tanel(EE), Tanel(EE), Tarvo(EE), Taufiq(KE), Thomas(SE), Tom(KE), Tomas(SE), Tõnis(EE), Tony(JP), Toomas(EE), Triin(EE), Tuomo(FI), Tuuli(EE), Ugur(TR), Umer(AE), Urmas(EE), Väino(EE), Valdis(LV), Valdo(EE), Viljar(EE), Vladimir(SK), Vladimir(UA), William(JP), Yuriy(UA), Zaur(FI)</span>
</p>

<!-- Reach-U keskmine täiskohale taandatud töötajate arv oli 44. Meeskonda kuulusid 2017. aastal 66 inimest (nime taga hetkel käimasolev tööaasta ja 2017. aasta auhinnad) -->
<p class="slidetext heroes">
<span>Tegijad:</span> <span>Aadi(1), Aire(12), Aivar(26), Aleksandr(7), Alisa(1), Ando(18), Andra(14), Andres(1), Dario(2), Elar(10), Elis(9), Gaspar(11), Gert(2), Halliki(1), Hanna(16), Helen(1), Henry(10), Indrek(11), Ingrid(5), Ivar(11), Ivo(2), Jane(3), Janno(3), Jens-Konrad(1), Jevgeni(7), Joosep(7), Juan(7), Kadri(2), Kalev(1), Kälver(3), Kaspar(1), Kasper(11), Katerina(4), Kätlin(5), Katre(7), Katrin(20), Ken(2), Kuido(2), LauriA(6), LauriK(9), Leelo(4), Leino(14), Liis(5), MadisK(1), MadisK(6), Maiga(1), Marek(1), Margus(1), Maris(2), Märit(1, Ruler, Rubik), Markus(17), Mart(24), Marta(2), MartinM(2), MartinV(3), Mati(24), Mattias(7), Meelis(1), Oliver(2), Piret(6), Rait(3, Ruler nominee), Rauni(7), Saari(1), SanderS(1, Rubik), SanderT(2, Ruler nominee), SanderV(1), Simona(1), Siret(20), SteveM(6), SteveP(11, Ruler), Sven(12), TaaviD(2), TaaviP(2), TaaviV(10), Taisi(1), TanelJ(2), TanelK(2), Teet(30), Timo(1), Toivo(13, Ruler nominee), Tõnis(6), Tõnu(1), ToomasA(4), ToomasK(2), Ülari(1), Ülo(6)</span>
</p>
`;


  const style = `
  <style>
    html, html > body { margin: 0 auto 100px auto; padding: 0}
    body {margin: 0 auto 100px auto; max-width: 1024px; font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight:lighter; line-height: 20px; overflow-x: hidden}
    h1 {margin: 0 0 20px 0; padding: 20px; color: rgb(255, 255, 255); background: rgb(246, 89, 18) url("http://www.reach-u.com/uploads/6/1/8/4/61840011/1443454382.png") no-repeat right 10px; font-weight:lighter;}
    @media all and (max-width: 600px) {h1{padding-top: 60px; background-position: -5px 10px;}}
    p {margin: 0; padding: 10px 20px;}
    ul {list-style: none; margin: 0; padding: 0 40px 20px 40px;}
    h1, p, ul {opacity: 0; transition: all 0.2s linear 0s;}
    a {color: inherit; text-decoration: none;} a:hover {color: rgb(246, 89, 18)}
    .slidetext {position: fixed; left: 0; right: 0; padding: 0; height: 30px; line-height: 30px; font-size: 12px; font-style: italic; white-space: nowrap; background: #eee; color: #333; border-top: solid 1px #aaa;}
    .slidetext span {display: block; position: absolute; box-sizing: border-box; top: 0; left: 0;}
    .slidetext sub {margin-right: 5px;}
    .slidetext span:nth-child(1) {top: -1px; padding: 0 20px; background: inherit; border: inherit; font-weight: bold; z-index: 2}
    .slidetext span:nth-child(2) {transform: translateX(3000px)}
    .slidetext.friends {bottom: 30px;}
    .slidetext.heroes {bottom: 0;}
  </style>`;

  body.innerHTML = text.replace(/(https?:\/\/[\S]+(\b|$))/gim, '<a href="$1">$1</a>');
  head.innerHTML = style;
  head.innerHTML += `<link rel="shortcut icon" href="http://pump.reach-u.com/favicon.ico"/>`;
  head.innerHTML += `<meta charset="utf-8">`;
  head.innerHTML += `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">`;
  head.innerHTML += `<title>${$("h1").innerText}</title>`;
  body.childNodes.forEach((el, idx) => el.style && setTimeout(() => el.style.opacity = "1", idx * 100));
  const slide = (el, speed = 60) => {
    el.innerHTML = el.innerHTML.replace(/(\s?\()([\w\s,&;+]+)(\),?)/g, "<sub>$2</sub>");
    const {style} = el, from = window.innerWidth, to = -el.offsetWidth, duration = (from - to) / speed;
    const start = () => {setTimeout(() => {style.transition = `transform ${duration}s linear 0s`; style.transform = `translateX(${to}px)`;}, 500);};
    const reset = () => {style.transition = "none"; style.transform = `translateX(${from}px)`; start();};
    el.addEventListener("transitionend", reset);
    reset();
  };
  setTimeout(() => slide($(".slidetext.friends span:nth-child(2)"), 60), 2000);
  setTimeout(() => slide($(".slidetext.heroes span:nth-child(2)"), 40), 2000);
}());
