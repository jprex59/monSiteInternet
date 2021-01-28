/*********************Animation ecriture progrssive*********

$(document).ready(function(){
    var typed = new Typed(".texte", {
        strings: ["Âge : 19 ans", "Diplôme : Bac +2","Localisation : Haut De France"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
});
**********************************************************************/

/************Variable pour le menu*************************/
const button = document.querySelector(".coeurslide1");
const nav = document.querySelector("nav");
const backdrop = document.querySelector(".backdrop");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const icon = document.querySelector('.hamburger');
const closbackdrop = document.querySelector('.closehamburger');


/*************Ouvrir le menu****************************/
button.addEventListener("click", () => {
  nav.classList.add("open");
  icon.style.display = 'none';
  prev.style.display = 'none';
  next.style.display = 'none';
  closbackdrop.style.display = 'block';
});

icon.addEventListener('click', () => {
  nav.classList.add("open");
  icon.style.display = 'none';
  prev.style.display = 'none';
  next.style.display = 'none';
  closbackdrop.style.display = 'block';
});

/***********Fermer le menu************************/
backdrop.addEventListener("click", () => {
  nav.classList.remove("open");
  icon.style.display = 'block';
  closbackdrop.style.display = 'none';
  prev.style.display = 'block';
  next.style.display = 'block';
});

closbackdrop.addEventListener('click', () => {
  nav.classList.remove("open");
  closbackdrop.style.display = 'none';
  icon.style.display = 'block';
  prev.style.display = 'block';
  next.style.display = 'block';
  
});

