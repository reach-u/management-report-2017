/*globals window, document, setTimeout*/

(function () {
  "use strict";
  const head = document.head;
  const body = document.body;
  const $ = (selector) => body.querySelector(selector);
  const text = `

<h1>Reach-U 2017 Management Report</h1>
<p>
We’ve been on an incredible journey. Across three decades Reach-U evolved from map maker to GIS solutions provider and developer of complex software, with customers around the world. Because we focused on geography, our past annual management reports took the unique form of a map. This was to demonstrate the power of maps – if we can explain our activities as a map, we can clearly also utilise maps in service of our customers, and in flying colours too.
</p>
<p>
This year we switched gears – the management report is not text, but fully functional JavaScript code, that we’ve also published in GitHub (https://github.com/reach-u/management-report-2017). This again demonstrates our vision – when working in an agile manner and delivering builds on a daily basis, communication must be so good that even the code must be readable as plain English. This is specifically important in the area of data mining and processing, which is our key differentiator. <!-- For less technical readers the management report is available also as a web page that this code implements: http://www.reach-u.com/management-report-2017.html -->
</p>
<p>
In 2017, Reach-U was able to build on solid global economic growth to achieve a record increase in gross profit – 50%. The telecoms sector and clients outside the EU contributed to the growth the most. Turnover was distributed 2/3 from the EU and 1/3 the rest of the world.
</p>
<p>
A large share of turnover in foreign currencies caused a forex-related financial loss of 33 981 EUR through 2017.
</p>
<p>
Our R&D budget is almost 12% of total turnover. All R&D and market establishment spend is reported as period costs.
</p>
<p>
Reach-U focus is on:
</p>
<ul>
  <li>a. Assisting telecoms providers in improving quality of service to existing customers</li>
  <li>b. Supporting telecoms providers in mining new revenue streams</li>
  <li>c. Finding and providing solutions for simpler and more transparent governance, for both cities and entire countries</li>
</ul>
<p>
In 2018, the main investment areas are:
</p>
<ul>
  <li>a. Product development for datamining and for visualising location data in the telecom sector</li>
  <li>b. R&D in the area of automated mapping and the 3D modelling of road infrastructure</li>
  <li>c. Entering new markets in Africa and Asia</li>
</ul>


<!-- We want to thank our awesome clients and partners for making 2017 such a record-breaking year. We couldn’t do it without you – thank you.  -->
<p class="slidetext friends">
 <span>Clients and partners:</span> <span> Aare(EE), Abdulwahab(KE), Alan(IE), Aleksandr(UA), Amar(CA), Andreas(SE), Andres(EE), Andres(EE), Andres(EE), Ankit(CA), Auli(FI), Ave(EE), Baizhang(JP), Brian(IE), Carl-Johan(SE), Chinmaya(CA), Chris(JP), Danilo(EE), Dermot(IE), Doris(EE), Eamonn(JP), Edison(JP), Eglit(EE), Eleanor(LC), Elina(EE), Eng. Keno(KE), Enn(EE), Erki(EE), Erkki(EE), Evelin(EE), Evely(EE), Felipe(CL), Fiorenzo(CA), Franciscoabel(MX), Gerttu(EE), Hamza(CA), Hannes(EE), Haseeb(SA), Husnu(TR), Imran(AE), Indrek(EE), Indrek(EE), Indrek(EE), Jaan(EE), Jaanus(EE), Jaanus(EE), Jan(CZ), Jan(CZ), Jana(EE), Janno(EE), Janno(EE), Jefferson(CA), Jeroen(SE), Jia(SE), Jihad(AE), Jindrich(CZ), Johan(BE), John(IE), Joosep(EE), Josh(CA), Jürgen(EE), Juri(EE), Jüri(EE), Jussi(FI), Kaiko(EE), Kaisi(EE), Kätlin(EE), Konsta(FI), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristjan(EE), Kristo(EE), Lauri(EE), Lauri(EE), Liia(EE), Liilia(EE), Liina(EE), Luis(MX), Maarja(EE), Maarja(EE), Maie(EE), Mailis(EE), Manke(SE), Marge(EE), Margus(EE), Marius(EE), Mark (JP), Markku(FI), Martin(EE), Martin(EE), Martina(EE), Matis(EE), Mats(EE), Matt(CA), Mattias(SE), Mehis(EE), Meshack(KE), Michael(IE), Michael(SE), Mihkel(EE), Mihkel(EE), Mikael(FI), Mikk(EE), Mikk(EE), Momoko(JP), Moonika(EE), Mukesh(CA), Naeem(SA), Nauby(CA), Olena(CA), Omar(CA), Õnne(EE), Ove(EE), Patrik(SE), Petr(CZ), Priit(EE), Priit(EE), Priit(EE), Priit(EE), Rado(SK), Rain(EE), Rain(EE), Rando-Juku(EE), Rein(EE), Richard(CA), Robin(KE), Roland(FI), Roman(EE), Romet(EE), Rustam(UA), Sahar(CA), Svetlana(EE), Swagat(JP), Tambet(EE), Tanel(EE), Tanel(EE), Tarvo(EE), Taufiq(KE), Thomas(SE), Tom(KE), Tomas(SE), Tõnis(EE), Tony(JP), Toomas(EE), Triin(EE), Tuomo(FI), Tuuli(EE), Ugur(TR), Umer(AE), Urmas(EE), Väino(EE), Valdis(LV), Valdo(EE), Viljar(EE), Vladimir(SK), Vladimir(UA), William(JP), Yuriy(UA), Zaur(FI)</span>
</p>

<!-- We want to thank the 66 team members who contributed throughout 2017 (across 2017 the average number of full-time employees was 44). We’re listing our employees below, including years in employment and the award they received in 2017. -->
<p class="slidetext heroes">
<span>Employees:</span> <span>Aadi(1), Aire(12), Aivar(26), Aleksandr(7), Alisa(1), Ando(18), Andra(14), Andres(1), Dario(2), Elar(10), Elis(9), Gaspar(11), Gert(2), Halliki(1), Hanna(16), Helen(1), Henry(10), Indrek(11), Ingrid(5), Ivar(11), Ivo(2), Jane(3), Janno(3), Jens-Konrad(1), Jevgeni(7), Joosep(7), Juan(7), Kadri(2), Kalev(1), Kälver(3), Kaspar(1), Kasper(11), Katerina(4), Kätlin(5), Katre(7), Katrin(20), Ken(2), Kuido(2), LauriA(6), LauriK(9), Leelo(4), Leino(14), Liis(5), MadisK(1), MadisK(6), Maiga(1), Marek(1), Margus(1), Maris(2), Märit(1, Ruler, Rubik), Markus(17), Mart(24), Marta(2), MartinM(2), MartinV(3), Mati(24), Mattias(7), Meelis(1), Oliver(2), Piret(6), Rait(3, Ruler nominee), Rauni(7), Saari(1), SanderS(1, Rubik), SanderT(2, Ruler nominee), SanderV(1), Simona(1), Siret(20), SteveM(6), SteveP(11, Ruler), Sven(12), TaaviD(2), TaaviP(2), TaaviV(10), Taisi(1), TanelJ(2), TanelK(2), Teet(30), Timo(1), Toivo(13, Ruler nominee), Tõnis(6), Tõnu(1), ToomasA(4), ToomasK(2), Ülari(1), Ülo(6)</span>
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
