const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time()  {

let datetoday = new Date ();
let hors = datetoday.getHours();
let min = datetoday.getMinutes();
let seg = datetoday.getSeconds();


if (hors < 10) hors = '0' + hors;
if (min < 10) min = '0' + min;
if (seg < 10) seg = '0' + seg;


horas.textContent = hors;
minutos.textContent = min;
segundos.textContent = seg;


})