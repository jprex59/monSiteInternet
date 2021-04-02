const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
    // boucler sur tous item -> retirer la calss "is-active"
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    })

    // styliser l'indicator 
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.backgroundColor = '#151728';
    indicator.style.left = `${el.offsetLeft}px`;

    //ajout de la classe is-active
    el.classList.add('is-active');
    el.style.color = '#151728';

}



items.forEach((item, index ) =>{
    item.addEventListener('click', (e) => {
        handleIndicator(e.target)
    });
    item.classList.contains('is-active') && handleIndicator(item);
});


width = document.documentElement.clientWidth;

/***************************Deroulant*********************/
const icon = document.querySelector('.hamburger');
const icon1 = document.querySelector('.hamburger1');
const closehamburger_Responsive = document.querySelector('.closehamburger_Responsive');
const iconspansResponsive = document.querySelectorAll('.closehamburger_Responsive span');  // retourne un tableau
const iconspans = document.querySelectorAll('.hamburger span');  // retourne un tableau
const iconspans1 = document.querySelectorAll('.hamburger1 span');  // retourne un tableau
const iconspans2 = document.querySelectorAll('.closehamburger2 span');  // retourne un tableau
const sidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector('.closehamburger1');
const closesidebar2 = document.querySelector('.closehamburger2');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');

width = document.documentElement.clientWidth;
console.log(width);
console.log("width");


let touchStart, touchEnd;
let touchStartt, touchEndd;

/******************************************** */
if (width < 930) {
    icon1.style.display = 'block';
    menu.style.display = 'none';
    closesidebar2.style.display = 'none';

    
icon1.addEventListener('click', () => {
    sidebar.classList.add('open');
    closesidebar.classList.add('open');
    closehamburger_Responsive.style.display = 'block';
    icon1.style.display = 'none';
  });

  closehamburger_Responsive.addEventListener('click', () => {
    sidebar.classList.remove('open');
    closesidebar.classList.remove('open');
    closehamburger_Responsive.style.display = 'none';
    icon1.style.display = 'block';
  });

  closesidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
    icon1.style.display = 'block';
    closesidebar.classList.remove('open');
    closehamburger_Responsive.style.display = 'none';
  });
}else{
    /***********************sticky***************/
    // detecter lorsqu'on scroll
    window.onscroll = function() { sticky() };

    // recuperer les elements
    let stickycomponent = icon.offsetTop;

    // faire la fonction
    function sticky() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > stickycomponent) {
        icon.classList.add("sticky");
        closesidebar2.classList.add("sticky");

        iconspans.forEach(function(item) {
          item.style.backgroundColor = '#151728';
      });

        iconspans2.forEach(function(item2) {
        item2.style.backgroundColor = '#151728';
      });
    }
    else{
        icon.classList.remove("sticky");
        closesidebar2.classList.remove("sticky");

        iconspans.forEach(function(item) {
          item.style.backgroundColor = 'white';
      });

        iconspans2.forEach(function(item2) {
        item2.style.backgroundColor = 'white';
      });
    }
    }

    function redhamburger(){
    iconspans.forEach(function(item) {
        item.style.backgroundColor = '#151728';
    });
    }  

    function hamburger(){
    iconspans.forEach(function(item) {
        item.style.backgroundColor = '#83818c';
    });
}

/***************************************Enlever les elements qui font buguer quand je clic pour ouvrir le menu****************************************** */

icon.addEventListener('click', () => {
    sidebar.classList.add('open');
    closesidebar.classList.add('open');
    icon.style.display = 'none';
    menu.style.display = 'none';
    closesidebar2.style.display = 'block';
  });
  
  closesidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
    icon.style.display = 'block';
    menu.style.display = 'flex';
    closesidebar.classList.remove('open');
    closesidebar2.style.display = 'none';
  });
  
  closesidebar2.addEventListener('click', () => {
    sidebar.classList.remove('open');
    icon.style.display = 'block';
    menu.style.display = 'flex';
    closesidebar2.style.display = 'none';
    closesidebar.classList.remove('open');
  });
}



/**********************************Ouverture au slide tentative************************************/

body.addEventListener('touchstart', a => {
  touchStartt = a.targetTouches[0].clientX;
  console.log(touchStartt);
});

body.addEventListener('touchmove', a => {
  touchEndd = a.targetTouches[0].clientX;
  console.log(touchEndd);
});




body.addEventListener('touchend', a => {
  if (touchEndd - touchStartt > 350 ) {
    sidebar.classList.add('open');
    closesidebar.classList.add('open');
    icon.style.display = 'none';
    closesidebar2.style.display = 'block';
  }
});




body.addEventListener('touchstart', e => {
  touchStart = e.targetTouches[0].clientX;

});

body.addEventListener('touchmove', e => {
  touchEnd = e.targetTouches[0].clientX;

});

body.addEventListener('touchend', e => {
  if (touchStart - touchEnd > 100 ) {
    sidebar.classList.remove('open');
    icon.style.display = 'block';
    closesidebar2.style.display = 'none';
    closesidebar.classList.remove('open');
  }
});







