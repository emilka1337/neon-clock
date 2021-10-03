"use strict";

let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const COLORS = [
    "#EE5A24",
    "#12CBC4",
    "#009432",
    "red",
    "yellow"
];

document.getElementById("clocks").addEventListener("click", function() {
    let color = COLORS[random(0, COLORS.length)];

    document.getElementById("clocks").style.color = color;
    document.getElementById("clocks").style.textShadow = `${color} 0px 0px 30px`;
});

function setTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    document.getElementById('clocks').innerHTML = `${hours}<span>:</span>${minutes}`;
}

setTime();

setInterval(setTime, 10000);