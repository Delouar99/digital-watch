
const h = document.querySelector('.h');
const mi = document.querySelector('.mi');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const m = document.querySelector('.m');
const y = document.querySelector('.y');


setInterval(()=>{
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();


h.innerHTML = `${hour >= 12 ? hour-12: hour}:`;
mi.innerHTML = `${min < 10 ? '0'+ min : min}${hour>12 ? 'pm':'am'}`;
s.innerHTML = `${sec< 10?'0'+sec:sec}`;

d.innerHTML = `${day}/`;
m.innerHTML = `${month}/`;
y.innerHTML = `${year}`;


},1000);


