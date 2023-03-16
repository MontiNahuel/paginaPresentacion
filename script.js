window.onscroll = function() {scrollFunction()};
window.onclick = function(get_id) {};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("navbar").style.backgroundColor = "rgb(18, 0, 117)";
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
