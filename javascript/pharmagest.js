let slideIndexx = 1;
showSlidess(slideIndexx);

/*setInterval(, 3000);*/

function plusSlidess(a) {
    showSlidess(slideIndexx += a);
}

function currentSlides(a) {
    showSlidess(slideIndexx = a);
}

function showSlidess(a) {
    let slidespharmagest = document.getElementsByClassName('slidespharmagest');
    let dotpharmagest = document.getElementsByClassName('dotpharmagest');
    
    if(a > slidespharmagest.length) { slideIndexx = 1 }
    
    if(a < 1 ) { slideIndexx = slidespharmagest.length }
    
    // Cacher toutes les slides
    for(let z = 0; z < slidespharmagest.length; z++) {
      slidespharmagest[z].style.display = "none";
    }
    
    // Retirer "active" de tous les points
    for(let z = 0; z < dotpharmagest.length; z++) {
      dotpharmagest[z].classList.remove('active');
    }
    
    // Afficher la slide demandée
    slidespharmagest[slideIndexx - 1].style.display = 'block';
    
    // Ajouter "active" sur le point cliqué
    dotpharmagest[slideIndexx - 1].classList.add('active');
  }