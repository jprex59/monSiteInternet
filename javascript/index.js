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
const card = document.querySelector('.card');
const iframe = document.querySelector("iframe");
const slide3 = document.querySelector(".slide3");

width = document.documentElement.clientWidth;
console.log(width);

/*************Ouvrir le menu****************************/
button.addEventListener("click", () => {
  nav.classList.add("open");
  icon.style.display = 'none';
  prev.style.display = 'none';
  next.style.display = 'none';
  card.style.display = 'none';
  closbackdrop.style.display = 'block';
});

icon.addEventListener('click', () => {
  nav.classList.add("open");
  icon.style.display = 'none';
  prev.style.display = 'none';
  next.style.display = 'none';
  card.style.display = 'none';
  closbackdrop.style.display = 'block';
  if (width >970) {
    iframe.style.height = '38em'; 
    slide3.style.height = '38em'; 
    backdrop.style.height = '38em'; 
  }
  else{
    iframe.style.height = '60em'; 
    slide3.style.height = '60em';
    backdrop.style.height = '60em'; 
  }   
});

/***********Fermer le menu************************/
backdrop.addEventListener("click", () => {
  nav.classList.remove("open");
  icon.style.display = 'block';
  closbackdrop.style.display = 'none';
  prev.style.display = 'block';
  next.style.display = 'block';
  card.style.display = 'flex';
  iframe.style.height = '1147px';
  slide3.style.height = '1147px'; 
});

closbackdrop.addEventListener('click', () => {
  nav.classList.remove("open");
  closbackdrop.style.display = 'none';
  icon.style.display = 'block';
  prev.style.display = 'block';
  next.style.display = 'block';
  card.style.display = 'flex'; 
  iframe.style.height = '1147px';
  slide3.style.height = '1147px'; 
});

