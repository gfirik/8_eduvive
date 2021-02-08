var nav = document.getElementById("nav");
var navLinks = document.getElementById("nav-links");
var navLines = document.getElementById("nav-line");
var btn = document.getElementById("menu-btn");
var xBtn = document.getElementById("menu-exit-btn");

function toggleMenu() {
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
        nav.style.height="100vh";
        btn.style.display = "none";
        xBtn.style.display = "block";
        navLines.style.display = "none";
    } 
    else {
        navLinks.style.display = "none";
        nav.style.height= "10vh";
        xBtn.style.display = "none";
        btn.style.display = "block";
    }
}
function exitMenu() {
    if(btn.style.display === "none"){
        btn.style.display = "block";
        xBtn.style.display = "none";
    }
    else {
        btn.style.display = "none";
        xBtn.style.display = "block";
    }
}