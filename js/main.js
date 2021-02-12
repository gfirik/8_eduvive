var nav = document.getElementById("nav-links");
var btns = nav.getElementsByClassName("nav-a-list");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

var menuBtn = document.getElementById("menu-btn");
var exitBtn = document.getElementById("menu-exit-btn");
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
// nav.style.display="none";
//     exitBtn.style.display="none";
//     menuBtn.style.display="flex";