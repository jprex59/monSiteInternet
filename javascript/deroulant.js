const icon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector('.closehamburger1');
const closesidebar2 = document.querySelector('.closehamburger2');
const containerstage = document.querySelector('.containerstage');
const prevpharmagest = document.querySelector('.prevpharmagest');
const nextpharmagest = document.querySelector('.nextpharmagest');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const body = document.querySelector('body');
const timeline = document.querySelector('.history-tl-container');


let touchStart, touchEnd;
let touchStartt, touchEndd;

/***************************************Enlever les elements qui font buguer quand je clic pour ouvrir le menu****************************************** */

icon.addEventListener('click', () => {
  sidebar.classList.add('open');
  closesidebar.classList.add('open');
  icon.style.display = 'none';
  closesidebar2.style.display = 'block';
  containerstage.style.position = 'initial';
  prev.style.display = 'none';
  next.style.display = 'none';
  prevpharmagest.style.display = 'none';
  nextpharmagest.style.display = 'none';
  timeline.style.display = 'none';
});

closesidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
  icon.style.display = 'block';
  closesidebar.classList.remove('open');
  containerstage.style.position = 'relative';
  prev.style.display = 'block';
  next.style.display = 'block';
  prevpharmagest.style.display = 'block';
  nextpharmagest.style.display = 'block';
  timeline.style.display = 'block';
});

closesidebar2.addEventListener('click', () => {
  sidebar.classList.remove('open');
  icon.style.display = 'block';
  closesidebar2.style.display = 'none';
  closesidebar.classList.remove('open');
  containerstage.style.position = 'relative';
  prev.style.display = 'block';
  next.style.display = 'block';
  prevpharmagest.style.display = 'block';
  nextpharmagest.style.display = 'block';
  timeline.style.display = 'block';
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
  if (touchEndd - touchStartt > 250 ) {
    sidebar.classList.add('open');
    closesidebar.classList.add('open');
     icon.style.display = 'none';
  closesidebar2.style.display = 'block';
  containerstage.style.position = 'initial';
  prev.style.display = 'none';
  next.style.display = 'none';
  prevpharmagest.style.display = 'none';
  nextpharmagest.style.display = 'none';
  timeline.style.display = 'none';
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
  if (touchStart - touchEnd > 250 ) {
    sidebar.classList.remove('open');
    icon.style.display = 'block';
    closesidebar2.style.display = 'none';
    closesidebar.classList.remove('open');
    containerstage.style.position = 'relative';
    prev.style.display = 'block';
    next.style.display = 'block';
    prevpharmagest.style.display = 'block';
    nextpharmagest.style.display = 'block';
    timeline.style.display = 'block';
  }
});