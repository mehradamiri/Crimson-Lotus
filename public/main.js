var a = 0 ;
var xM = 0;
function d4() {
    document.getElementById('num').style.color = "#E59C69"
    a = Math.floor(Math.random() * 4)+1;
    document.getElementById("num").innerHTML = a ;
}
function d6() {
    document.getElementById('num').style.color = "#C32430"
    a = Math.floor(Math.random() * 6)+1;
    document.getElementById("num").innerHTML = a ;
}

function d8() {
    document.getElementById('num').style.color = "#18F4FF"
    a = Math.floor(Math.random() * 8)+1;
    document.getElementById("num").innerHTML = a ;
}

function d10() {
    document.getElementById('num').style.color = "#F187F3"
    a = Math.floor(Math.random() * 10)+1;
    document.getElementById("num").innerHTML = a ;
}

function d12() {
    document.getElementById('num').style.color = "#FFC825"
    a = Math.floor(Math.random() * 12)+1;
    document.getElementById("num").innerHTML = a ;
}

function d20() {
    document.getElementById('num').style.color = "#16c266"
    a = Math.floor(Math.random() * 20)+1;
    document.getElementById("num").innerHTML = a ;
}
function DR(){
    document.getElementById('num').style.color = "#D455C8"
    xM = document.getElementById("inp1").value ;
    a = Math.floor(Math.random() * parseFloat(xM))+1;
    document.getElementById('num').innerHTML = a;
}
