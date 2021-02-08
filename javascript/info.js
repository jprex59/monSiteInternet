const news = document.querySelector('.titleNews');
const certif = document.querySelector('.titleCertifs');
const compétences = document.querySelector('.titleCompétences');
const aides = document.querySelector('.titleAides');
const reset = document.querySelector('.container');


news.addEventListener("mouseover", () => {
    news.style.display = 'none';
    certif.style.display = 'flex';
    aides.style.display = 'flex';
    compétences.style.display = 'flex';
});


certif.addEventListener("mouseover", () => {
    certif.style.display = 'none';
    news.style.display = 'flex';
    aides.style.display = 'flex';
    compétences.style.display = 'flex';
});

aides.addEventListener("mouseover", () => {
    aides.style.display = 'none';
    certif.style.display = 'flex';
    news.style.display = 'flex';
    compétences.style.display = 'flex';
});
compétences.addEventListener("mouseover", () => {
    compétences.style.display = 'none';
    news.style.display = 'flex';
    aides.style.display = 'flex';
    certif.style.display = 'flex';
});
/*
reset.addEventListener("mouseover", () => {
    news.style.display = 'flex';
    certif.style.display = 'flex';
    aides.style.display = 'flex';
    compétences.style.display = 'flex';
});*/