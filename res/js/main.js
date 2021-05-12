function navToggle()
{
  let x = document.getElementById("menu-bar");
  let menu = document.getElementById("menu");
  if(x.classList.contains("fa-bars")){
    x.classList.toggle("fa-times");
    x.classList.remove("fa-bars");
    menu.style.display = "block";
  }else if (x.classList.contains("fa-times")) {
    x.classList.toggle("fa-bars");
    x.classList.remove("fa-times");
    menu.style.display = "none";
  }
  let menuLinks = document.querySelectorAll(".js-close");
  
  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", navToggle);
     }
  )
}

// Added date in foote
  let d = new Date();
  document.getElementById("toDate").innerHTML = d.getFullYear();
