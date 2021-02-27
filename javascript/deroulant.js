const icon = document.querySelector('.hamburger');
const iconspans = document.querySelectorAll('.hamburger span');  // retourne un tableau
const iconspans2 = document.querySelectorAll('.closehamburger2 span');  // retourne un tableau
const sidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector('.closehamburger1');
const closesidebar2 = document.querySelector('.closehamburger2');




let touchStart, touchEnd;
let touchStartt, touchEndd;

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
          item.style.backgroundColor = 'black';
      });

        iconspans2.forEach(function(item2) {
        item2.style.backgroundColor = 'black';
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



/***************************************Enlever les elements qui font buguer quand je clic pour ouvrir le menu****************************************** */

icon.addEventListener('click', () => {
  sidebar.classList.add('open');
  closesidebar.classList.add('open');
  icon.style.display = 'none';
  closesidebar2.style.display = 'block';
});

closesidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
  icon.style.display = 'block';
  closesidebar.classList.remove('open');
});

closesidebar2.addEventListener('click', () => {
  sidebar.classList.remove('open');
  icon.style.display = 'block';
  closesidebar2.style.display = 'none';
  closesidebar.classList.remove('open');
});

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



/**************************************************Le slide********************************************* */
body.addEventListener('touchstart', e => {
  touchStart = e.targetTouches[0].clientX;
  /*console.log(touchStart)*/
});

body.addEventListener('touchmove', e => {
  touchEnd = e.targetTouches[0].clientX;
  /*console.log(touchEnd)*/
});

body.addEventListener('touchend', e => {
  if (touchStart - touchEnd > 100 ) {
    sidebar.classList.remove('open');
    icon.style.display = 'block';
    closesidebar2.style.display = 'none';
    closesidebar.classList.remove('open');
  }
});