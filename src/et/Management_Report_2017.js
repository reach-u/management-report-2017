/*globals window, document, setTimeout*/

(function () {
  "use strict";
  const head = document.head;
  const body = document.body;
  const $ = (selector) => body.querySelector(selector);
  const text = `

<h1>Tegevusaruanne 2017</h1>
<p>
Reach-U on tarkvaraettevõte. Meie põhilised tegevusvaldkonnad on:
</p>
<ul>
  <li>a. telekomiettevõtete aitamine olemasolevatele klientidele veelgi parema teenuse pakkumisel ning uute ärisuundade leidmisel</li>
  <li>b. riigi- ja linnajuhtimise lihtsustamine ning läbipaistvamaks muutmine</li>
</ul>
<p>
Maailmamajanduse positiivses toetuses oli 2017. aasta ettevõttele väga hea. Müügitulu kasvas üle <span class="salesgrowth">50%</span>, seda eelkõige telekomisektoris. Kasvas ka välisturgudele tehtavate lahenduste osakaal, jaotades käibe suhtega 1/3 Eesti, 1/3 muu Euroopa Liit, 1/3 muu maailm. Täname oma kliente ja partnereid usalduse eest.
</p>
<p>
Reach-U meeskonnas panustas 2017. aastal 66 inimest. Täiskohale taandatud töötajate arv oli 44.
</p>
<p>
2018. aastaks plaanime sarnast finantstulemust eelmisega.
</p>
<p>
2017. aastal oli Reach-U R&D tegevuse eelarve 400 000 EUR, ehk 12% ettevõtte käibest. 2018. aastal jätkame R&D tegevust kahes valdkonnas:
</p>
<ul>
  <li>a. telekomisektori andmete väärtustamine ning visualiseerimine</li>
  <li>b. teede infrastruktuuri automaatkaardistamise ning 3D mudelite loomine</li>
</ul>
<p>
  Samuti jätkame investeeringuid Aafrika ja Aasia turgudele sisenemiseks.
  Kõik R&D ja turuhõive investeeringud kajastame perioodi kuludena.
</p>
<p>
  Kuna 37% Reach-U käibest laekub välisvaluutas, on valuutakursside kõikumine ettevõtte finantstulemust mõjutav. 2017. aastal kandsime kursimuudatustest kahju 33 981 EUR.
</p>
<p>
Reach-U on oma pea 30 tegevusaasta jooksul arenenud kaartide tegijast geoinfosüsteemide loojaks ja sealt edasi tarkvaraettevõtteks. Tähistamaks seda verstaposti, oleme tegevusaruande kirjutanud koodina, mis käivitamisel annab järgmise tulemuse: managementreport2017.reach-u.com
</p>

<!-- KOMMENTAAR? -->
<p class="slidetext friends">
 <span>Kliendid ja partnerid:</span> <span> Aare(EE), Abdulwahab(KE), Aleksandr(UA), Amar(CA), Andreas(SE), Andres(EE), Andres(EE), Andres(EE), Ankit(CA), Auli(FI), Ave(EE), Baizhang(JP), Carl-Johan(SE), Chinmaya(CA), Chris(JP), Danilo(EE), Doris(EE), Eamonn(JP), Edison(JP), Eglit(EE), Eleanor(LC), Elina(EE), Eng. Keno(KE), Enn(EE), Erki(EE), Erkki(EE), Evelin(EE), Evely(EE), Felipe(CL), Fiorenzo(CA), Franciscoabel(MX), Gerttu(EE), Hamza(CA), Hannes(EE), Haseeb(SA), Husnu(TR), Imran(AE), Indrek(EE), Indrek(EE), Indrek(EE), Jaan(EE), Jaanus(EE), Jaanus(EE), Jan(CZ), Jan(CZ), Jana(EE), Janno(EE), Janno(EE), Jefferson(CA), Jeroen(SE), Jia(SE), Jihad(AE), Jindrich(CZ), Johan(BE), Joosep(EE), Josh(CA), Jürgen(EE), Juri(EE), Jüri(EE), Jussi(FI), Kaiko(EE), Kaisi(EE), Kätlin(EE), Konsta(FI), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristo(EE), Lauri(EE), Lauri(EE), Liia(EE), Liilia(EE), Liina(EE), Luis(MX), Maarja(EE), Maarja(EE), Maie(EE), Mailis(EE), Manke(SE), Marge(EE), Margus(EE), Marius(EE), Mark (JP), Markku(FI), Martin(EE), Martin(EE), Martina(EE), Matis(EE), Mats(EE), Matt(CA), Mattias(SE), Mehis(EE), Meshack(KE), Michael(SE), Mihkel(EE), Mihkel(EE), Mikael(FI), Mikk(EE), Mikk(EE), Momoko(JP), Moonika(EE), Mukesh(CA), Naeem(SA), Nauby(CA), Olena(CA), Omar(CA), Õnne(EE), Ove(EE), Petr(CZ), Priit(EE), Priit(EE), Priit(EE), Priit(EE), Rado(SK), Rain(EE), Rain(EE), Rando-Juku(EE), Rein(EE), Richard(CA), Robin(KE), Roland(FI), Roman(EE), Romet(EE), Rustam(UA), Sahar(CA), Svetlana(EE), Swagat(JP), Tambet(EE), Tanel(EE), Tanel(EE), Tarvo(EE), Taufiq(KE), Thomas(SE), Tom(KE), Tomas(SE), Tõnis(EE), Tony(JP), Toomas(EE), Triin(EE), Tuomo(FI), Tuuli(EE), Ugur(TR), Umer(AE), Urmas(EE), Väino(EE), Valdis(LV), Valdo(EE), Viljar(EE), Vladimir(SK), Vladimir(UA), William(JP), Yuriy(UA), Zaur(FI)</span>
</p>

<!-- KOMMENTAAR? -->
<p class="slidetext heroes">
<span>Tegijad:</span> <span>Aadi(1), Aire(144), Aivar(301), Aleksandr(76), Alisa(1), Ando(210), Andra(157), Andres(4), Dario(21), Elar(120), Elis(108), Gaspar(130), Gert(22), Halliki(3), Hanna(189), Helen(2), Henry(117), Indrek(128), Ingrid(49), Ivar(121), Ivo(19), Jane(34), Janno(28), Jens-Konrad(2), Jevgeni(75), Joosep(83), Juan(84), Kadri(17), Kalev(2), Kälver(30), Kaspar(6), Kasper(130), Katerina(38), Kätlin(49), Katre(81), Katrin(236), Ken(20), Kuido(17), LauriA(63), LauriK(101), Leelo(47), Leino(158), Liis(49), MadisK(1), MadisK(62), Maiga(1), Marek(4), Margus(4), Maris(21), Märit(7, Ruler, Rubik), Markus(200), Mart(287), Marta(21), MartinM(16), MartinV(28), Mati(279), Mattias(84), Meelis(1), Oliver(15), Piret(63), Rait(26, Ruler nominee), Rauni(80), Saari(2), SanderS(6, Rubik), SanderT(23, Ruler nominee), SanderV(7), Simona(4), Siret(231), SteveM(62), SteveP(130, Ruler), Sven(133), TaaviD(24), TaaviP(15), TaaviV(109), Taisi(9), TanelJ(16), TanelK(16), Teet(353), Timo(4), Toivo(148, Ruler nominee), Tõnis(62), Tõnu(3), ToomasA(37), ToomasK(15), Ülari(3), Ülo(70)</span>
</p>
`;


  const style = `
  <style>
    body {margin: 0 auto 100px auto; max-width: 1024px; font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight:lighter; line-height: 20px; overflow-x: hidden}
    h1 {margin: 0 0 20px 0; padding: 20px; color: rgb(255, 255, 255); background: rgb(246, 89, 18) url("http://www.reach-u.com/uploads/6/1/8/4/61840011/1443454382.png") no-repeat right 10px; font-weight:lighter;}
    @media all and (max-width: 600px) {h1{padding-top: 60px; background-position: -5px 10px;}}
    p {margin: 0; padding: 10px 20px;}
    ul {list-style: none; margin: 0; padding: 0 40px 20px 40px;}
    .salesgrowth {display: inline-block; width: 40px; color: rgb(246, 89, 18); text-align: center;}
    h1, p, ul {opacity: 0;}
    h1, p, ul, .salesgrowth {transition: all 0.2s linear 0s;}
    .slidetext {position: fixed; left: 0; right: 0; padding: 0; height: 30px; line-height: 30px; font-size: 12px; font-style: italic; white-space: nowrap; background: #eee; color: #333; border-top: solid 1px #aaa;}
    .slidetext span {display: block; position: absolute; box-sizing: border-box; top: 0; left: 0;}
    .slidetext sub {margin-right: 5px;}
    .slidetext span:nth-child(1) {top: -1px; padding: 0 20px 0 20px; background: inherit; border: inherit; font-weight: bold; z-index: 2}
    .slidetext span:nth-child(2) {transform: translateX(3000px)}
    .slidetext.friends {bottom: 30px;}
    .slidetext.heroes {bottom: 0;}
  </style>`;

  body.innerHTML = text;
  head.innerHTML = style;
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
  setTimeout(() => slide($(".slidetext.heroes span:nth-child(2)"), 60), 2000);
  setTimeout(() => $(".salesgrowth").style.transform = "scale(1.5)", 2500);
}());

