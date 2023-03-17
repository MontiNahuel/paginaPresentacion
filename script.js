window.onscroll = function() {scrollFunction()};
window.onclick = function(get_id) {};
document.querySelector(".navbar-toggler").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars_menu");
var line2__bars = document.querySelector(".line2__bars_menu");
var line3__bars = document.querySelector(".line3__bars_menu");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("navbar").style.backgroundColor = "rgb(18, 0, 117,.8)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "";
    }
}

function clickBotonNav(get_id) {
    if(get_id == "home") {
        console.log("es home");
        document.getElementById("hola").classList.remove("Active");
        document.getElementById("adios").classList.remove("Active");
        document.getElementById("home").classList.add("Active");
    } else if (get_id == "hola") {
        console.log("es hola");
        document.getElementById("home").classList.remove("Active");
        document.getElementById("adios").classList.remove("Active");
        document.getElementById("hola").classList.add("Active");
    } else if (get_id == "adios") {
        document.getElementById("home").classList.remove("Active");
        document.getElementById("hola").classList.remove("Active");
        document.getElementById("adios").classList.add("Active");
    }
}

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars_menu");
    line2__bars.classList.toggle("activeline2__bars_menu");
    line3__bars.classList.toggle("activeline3__bars_menu");
}