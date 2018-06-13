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
  Maailmamajanduse positiivses toetuses oli 2017. aasta ettevõttele väga hea. Müügitulu kasvas üle <span class="salesgrowth">50%</span>, seda eelkõige telekomisektoris. Kasvas ka välisturgudele tehtavate lahenduste osakaal, jaotades käibe suhtega 1/3 Eesti, 1/3 muu Euroopa Liit, 1/3 muu maailm. 2018. aastaks plaanime sarnast finantstulemust eelmisega.
</p>
<p>
  2018. aastal jätkame R&D tegevust kahes valdkonnas:
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
  Kuna XX protsenti Reach-U käibest laekub välisvaluutas, on valuutakursside kõikumine ettevõtte finantstulemust mõjutav. 2017. aastal kandsime kursimuudatustest kahju XXEUR.
</p>

<!-- Lorem ipsum(EE), dolor sit amet(EE), consectetur(EE), adipiscing elit -->
<p class="slidetext friends">
 <span>Partnerid:</span> <span>Lorem ipsum(EE), dolor sit amet(EE), consectetur(EE), adipiscing elit(CA), sed do eiusmod(CA), tempor incididunt(EE), ut labore et dolore magna aliqua(EE), Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
</p>

<!-- Lorem ipsum(EE), dolor sit amet(EE), consectetur(EE), adipiscing elit -->
<p class="slidetext heroes">
<span>Tegijad:</span> <span>Aivar(26), Teet(25), Mati(23), Katrin(20), Siret(19), Ando(18), Hanna(16), Andra(14), Leino(13), Aire(12), Sven(12), Toivo(12), Gaspar(11), Indrek(11), Steve(11, ruler nominee), Elar(10), Ivar(10), Elis(9), Joosep(9), Taavi(9), Katre(7), Rauni(7), Jevgeni(6), Ülo(6), Lauri(5),  Madis(5), Piret(5), Tõnis(5), Ingrid(4), Kätlin(4), Liis(4), Katerina(3), Leelo(3), Toomas(3), Dario(2), Gert(2), Ivo(2), Janno(2), Ken(2), Maris(2), Rait(2), Sander(2), Taavi(2), Aadi(1), Alisa(1), Halliki(1), Helen(1), Jens-Konrad(1), Kadri(1), Kalev(1), Kaspar(1), Kuido(1), Madis(1), Maiga(1), Margus(1), Marta(1), Martin(1), Meelis(1), Märit(1, ruler & rubik), Oliver(1), Sander(1, rubik nominee), Sander(1), Simona(1), Taavi(1), Taisi(1), Tanel(1), Tõnu(1), Ülari(1) </span>
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
    .slidetext span:nth-child(1) {top: -1px; width: 90px; padding: 0 0 0 20px; background: inherit; border: inherit; font-weight: bold; z-index: 2}
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

