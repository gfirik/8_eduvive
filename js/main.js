function toggleMenu() {
    var x = document.getElementById("nav-links");
    var y = document.getElementById("nav-line");
    var nav = document.getElementById("nav");
    if (x.style.display === "none") 
    {
      x.style.display = "block";
      nav.style.height="100vh";
    } 
    else {
      x.style.display = "none";
      nav.style.height= "10vh";
    }
  }