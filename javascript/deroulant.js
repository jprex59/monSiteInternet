const icon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector('.closehamburger1');
const closesidebar2 = document.querySelector('.closehamburger2');
const containerstage = document.querySelector('.containerstage');
const prevpharmagest = document.querySelector('.prevpharmagest');
const nextpharmagest = document.querySelector('.nextpharmagest');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const timeline = document.querySelector('.history-tl-container');


let touchStart, touchEnd;



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

sidebar.addEventListener('touchstart', e => {
  touchStart = e.targetTouches[0].clientX;
  console.log(touchStart)
});

sidebar.addEventListener('touchmove', e => {
  touchEnd = e.targetTouches[0].clientX;
  console.log(touchEnd)
});

sidebar.addEventListener('touchend', e => {
  if (touchStart - touchEnd > 100 ) {
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




