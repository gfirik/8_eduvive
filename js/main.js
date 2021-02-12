var mainNav = document.getElementById("nav");
var nav = document.getElementById("nav-links");
var links = nav.getElementsByClassName("nav-a-list");
var menuBtn = document.getElementById("menu-btn");
var exitBtn = document.getElementById("menu-exit-btn");
var aLink = nav.getElementsByClassName("active");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    function myFunction(windowSize) {
        if(windowSize.matches){
            nav.style.display="none";
            exitBtn.style.display="none";
            menuBtn.style.display="flex";
        } 
        else {}
    }
    var windowSize = window.matchMedia("(max-width: 666px");
    myFunction(windowSize);
    windowSize.addEventListener(myFunction);
    });
}


function toggleMenu() {
    if(nav.style.display="none"){
        nav.style.display="flex";
        menuBtn.style.display="none";
        exitBtn.style.display="flex";
    }
    else {
        nav.style.display="none";
        exitBtn.style.display="none";
    }
}
function exitMenu() {
    if(nav.style.display="flex") {
        nav.style.display="none";
        exitBtn.style.display="none";
        menuBtn.style.display="flex";
    }
    else {
        nav.style.display="flex";
        exitBtn.style.display="flex";
        menuBtn.style.display="none";
    }
}

function myFunction(windowSize) {
    if(windowSize.matches){
        nav.style.display="none";
        exitBtn.style.display="none";
        menuBtn.style.display="flex";
    } 
    else {}
}
var windowSize = window.matchMedia("(max-width: 666px");
myFunction(windowSize);
windowSize.addEventListener(myFunction);