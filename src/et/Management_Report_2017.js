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
<p class="slidetext one">
 <span>Partnerid:</span> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
</p>
<p class="slidetext two">
<span>Tegijad:</span> <span>Aivar<sub>26</sub> Teet<sub>25</sub> Mati<sub>23</sub> Katrin<sub>20</sub> Siret<sub>19</sub> Ando<sub>18</sub> Hanna<sub>16</sub> Andra<sub>14</sub> Leino<sub>13</sub> Aire<sub>12</sub> Sven<sub> 12</sub> Toivo<sub>12</sub> Gaspar<sub>11</sub> Indrek<sub>11</sub> Steve<sub>11</sub> Elar<sub>10</sub> Ivar<sub>10</sub> Elis<sub>9</sub> Joosep<sub>9</sub> Taavi<sub>9</sub> Katre<sub>7</sub> Rauni<sub>7</sub> Jevgeni<sub>6</sub> Ülo<sub>6</sub> Lauri<sub>5</sub>  Madis<sub>5</sub> Piret<sub>5</sub> Tõnis<sub>5</sub> Ingrid<sub>4</sub> Kätlin<sub>4</sub> Liis<sub>4</sub> Katerina<sub>3</sub> Leelo<sub>3</sub> Toomas<sub>3</sub> Dario<sub>2</sub> Gert<sub>2</sub> Ivo<sub>2</sub> Janno<sub>2</sub> Ken<sub>2</sub> Maris<sub>2</sub> Rait<sub>2</sub> Sander<sub>2</sub> Taavi<sub>2</sub> Aadi<sub>1</sub> Alisa<sub>1</sub> Halliki<sub>1</sub> Helen<sub>1</sub> Jens-Konrad<sub>1</sub> Kadri<sub>1</sub> Kalev<sub>1</sub> Kaspar<sub>1</sub> Kuido<sub>1</sub> Madis<sub>1</sub> Maiga<sub>1</sub> Margus<sub>1</sub> Marta<sub>1</sub> Martin<sub>1</sub> Meelis<sub>1</sub> Märit<sub>1</sub> Oliver<sub>1</sub> Sander<sub>1</sub> Sander<sub>1</sub> Simona<sub>1</sub> Taavi<sub>1</sub> Taisi<sub>1</sub> Tanel<sub>1</sub> Tõnu<sub>1</sub> Ülari<sub>1</sub></span>
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
    .slidetext span:nth-child(1) {top: -1px; width: 90px; padding: 0 0 0 20px; background: inherit; border: inherit; font-weight: bold; z-index: 2}
    .slidetext span:nth-child(2) {transform: translateX(3000px)}
    .slidetext.one {bottom: 30px;}
    .slidetext.two {bottom: 0;}
  </style>`;

  body.innerHTML = text;
  head.innerHTML = style;
  head.innerHTML += `<title>${$("h1").innerText}</title>`;
  body.childNodes.forEach((el, idx) => el.style && setTimeout(() => el.style.opacity = "1", idx * 100));
  const slide = (el, speed = 60) => {
    const {style} = el, from = window.innerWidth, to = -el.offsetWidth, duration = (from - to) / speed;
    const start = () => {setTimeout(() => {style.transition = `transform ${duration}s linear 0s`; style.transform = `translateX(${to}px)`;}, 500);};
    const reset = () => {style.transition = "none"; style.transform = `translateX(${from}px)`; start();};
    el.addEventListener("transitionend", reset);
    reset();
  };
  setTimeout(() => slide($(".slidetext.one span:nth-child(2)"), 60), 2000);
  setTimeout(() => slide($(".slidetext.two span:nth-child(2)"), 60), 2000);
  setTimeout(() => $(".salesgrowth").style.transform = "scale(1.5)", 2500);
}());

