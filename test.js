/*
let broj = 0
let ukupnoKlik = 0
function klik(){
    broj += 1;
    document.getElementById("count").innerText = broj
    ukupnoKlik = ukupnoKlik + 1
    document.getElementById("ukupnoklikova").innerText = "Ukupno Ulazaka: " + ukupnoKlik
    
}

let resetbroj = 0;
let max = 0
let averagebroj = 0
function save(){
let spremljen = " " + broj + " - "
if (max < 3) {
    document.getElementById("savednumber").innerText = document.getElementById("savednumber").innerText + spremljen 
    max++
   
    
}
else{
    document.getElementById("makssave").innerText = "Maksimalan broj saveova"
}
averagebroj = averagebroj + broj
let rijsenje = averagebroj / 3
document.getElementById("average").innerText = "Average Broj Ulazaka: " + rijsenje
broj = 0
document.getElementById("count").innerText = broj


}
function reset(){
    rijsenje = 0
    averagebroj = 0
    document.getElementById("count").innerText = broj;
    document.getElementById("savednumber").innerText = "Previous Entries: " 
    document.getElementById("makssave").innerHTML = ""
    document.getElementById("average").innerHTML = "Average Broj Ulazaka: " + averagebroj
    max = 0

    
}
*/

// JavaScript code to make oblik3 flicker
setInterval(() => {
    const oblik3 = document.getElementById('oblik3');
    oblik3.style.opacity = oblik3.style.opacity == '0.8' ? '0.4' : '0.8';
}, 500);


function scrolldiv() {
    window.scrollTo({
        top: findPosition(document.getElementById("projekti")) + 70,
        behavior: "smooth"
    });
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
    }
    return currenttop;
}

document.getElementById("projects").addEventListener("click", scrolldiv);